import { useState } from 'react';
import ProductImage from '../../../../../assets/entente.png';
import getPromoCode from '../../../../../api/payments/getPromoCode';
import { credits2Munee } from '../constants/creditsConversionRate';

const PromoCodeStep = (props) => {
  const {
    language,
    product,
    promo,
    setPromo,
    promoCode,
    setPromoCode,
    fPrice,
    credits,
    useCredits,
    setUseCredits,
    total,
  } = props;
  const [promoInvalid, setPromoInvalid] = useState(false);
  const fetchPromo = async (code) => {
    const promo = await getPromoCode(code);
    if (promo && promo.promo_id) {
      if (promo.purchase_id) {
        setPromoInvalid(true);
      } else {
        setPromo(promo);
      }
    } else {
      setPromoInvalid(true);
    }
  };

  const handlePromoCodeChange = (e) => {
    setPromoInvalid(false);
    setPromoCode(e.target.value);
  };

  return (
    <div className="order">
      <div className="item-row">
        <div className="item-image"><img alt="" src={ProductImage} /></div>
        <div className="item-description">{product.description[language]}</div>
        <div className="item-price">{fPrice(product.price)}</div>
      </div>
      <div className="item-row">
        <div className="item-image text-right">
          <label>{promo ? 'Promo Code:' : 'Enter a Promo Code:'}</label>
        </div>
        <div className="item-description">{
                promo ?
                  `${promo.organisation[language]}: ${promo.description[language]} `
                  : <input type="text" onChange={handlePromoCodeChange} />}
          {promoInvalid && <span style={{ color: '#c00' }}> invalid code</span>}
        </div>
        <div className="item-price">{
                promo ?
                  `-${fPrice(promo.value)}`
                  : (
                    <button
                      className={promoCode && !promoInvalid ? 'btn-primary-small' : 'btn-disabled-small'}
                      disabled={!promoCode || promoInvalid}
                      onClick={(e) => {
                        e.preventDefault();
                        fetchPromo(promoCode).catch((e) => {
                          console.log(e);
                        });
                      }}
                    >validate
                    </button>
                  ) }
        </div>
      </div>
      <div className="item-row">
        <div className="item-image text-right"><label>{credits || '0'} Credits Available</label></div>
        <div className="item-description">
          <label><input
            type="checkbox"
            checked={useCredits}
            onChange={
          (e) => {
            setUseCredits(e.target.checked);
          }
        } />
            Use Credits on this purchase
          </label>
        </div>
        <div className="item-price">{useCredits ? `-${fPrice(credits2Munee(credits))}` : '——'}</div>
      </div>
      <div className="item-row">
        <div className="item-image" />
        <div className="item-description text-right medium-700">Total:</div>
        <div className="item-price">{total()}</div>
      </div>
    </div>
  );
};
export default PromoCodeStep;
