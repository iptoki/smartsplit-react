import { useState, useEffect } from 'react';

import ProductCodes from '../../payments/ProductCodes';

import getUsers from '../../../api/users/getUsers';
import PaymentModal from '../../payments/PaymentModal';

const BuyTest = (props) => {
  const { language, workpiece, workpiece_id } = props;

  const [showModal, setShowModal] = useState(false);
  const modalProps = {
    setShowModal,
    productId: 'b42f9e18-b370-4b7a-900c-d148c6873657',
    workpiece,
    language,
  };
  return (
    <div className="rightSplitCreation">
      <div style={{ margin: '100px 20% 0 20%' }}>
        <h2 className="title">Test Buy</h2>
        <button className="btn-primary" onClick={() => setShowModal(true)}>Buy PDF</button>
        {showModal && <PaymentModal {...modalProps} />}
      </div>
    </div>
  );
};
export default BuyTest;
