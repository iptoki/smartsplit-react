import MultiSelect from '../../../_/form/multiSelect/multiSelect';
import PhoneNumber from '../../../_/form/phoneNumber/phoneNumber';

export default function Account(props) {
  const { account, setField, updateUser } = props;
  return (
    <div className="account" id="account">
      <h2>Compte</h2>
      <div className="formInput">
        <label htmlFor="address">Mon adresse civique</label>
        <input
          id="address"
          type="text"
          value={account.address}
          onChange={(e) => setField('account', { address: e.target.value })}
          onBlur={updateUser}
        />
      </div>
      <div className="formInput">
        <label htmlFor="locale">Ma langue</label>
        <input
          id="locale"
          type="text"
          value={account.locale}
          onChange={(e) => setField('account', { locale: e.target.value })}
          onBlur={updateUser}
        />
      </div>
      <div className="formInput">
        <label htmlFor="phoneNumber">Mon téléphone mobile</label>
        <PhoneNumber
          id="phoneNumber"
          type="text"
          value={account.phoneNumber}
          onChange={(value) =>
            setField('account', {
              phoneNumber: value,
            })
          }
          onBlur={updateUser}
        />
      </div>
      <div className="formInput toDo">
        <label htmlFor="emails">Mes courriels liés à ce compte</label>
        <MultiSelect
          id="emails"
          value={account.emails}
          onChange={(value) => setField('account', { emails: value })}
          onBlur={updateUser}
        />
      </div>
    </div>
  );
}