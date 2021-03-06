import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import SmartSplit from '../../../icons/smartsplit';
import postUser from '../../../api/users/postUser';
import CheckEmailModal from './checkEmailModal/checkEmailModal';
import Checkbox from '../../_/form/checkbox/checkbox';
import useForm from '../../_/form/useForm';
import FormInput from '../../_/form/formInput/formInput';

export default (props) => {
  const { translations, language, isMobile } = props;
  const [stayConnected, setStayConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const form = useForm({
    email: {
      value: '',
      errors: [],
      validators: ['emailFormat', 'required'],
    },
    firstName: {
      value: '',
      errors: [],
      validators: ['required'],
    },
    lastName: {
      value: '',
      errors: [],
      validators: ['required'],
    },
    artistName: {
      value: '',
      errors: [],
      validators: ['required'],
    },
    password: {
      value: '',
      errors: [],
      validators: ['minLength_8', 'required'],
    },
    confirmPassword: {
      value: '',
      errors: [],
      validators: ['shouldMatch_password'],
      excluded: true,
    },
    termsChecked: {
      value: true,
      errors: [],
      validators: ['shouldBeTrue'],
      excluded: true,
    },
  });
  const [triedSubmit, setTriedSubmit] = useState(false);

  const history = useHistory();
  const handleSubmit = async () => {
    if (form.isValid()) {
      const result = await postUser({
        ...form.toJS(),
        locale: props.language,
      });
      if (result.statusCode === 409) {
        form.fields.email.errors.push('emailConflict');
        form.setField('email', { errors: form.fields.email.errors });
      } else {
        setShowModal(true);
        form.reset();
      }
    }
    setTriedSubmit(true);
    setStayConnected(false);
  };

  const commonProps = {
    language,
    errorTranslations: translations.publicPages.formErrors,
    triedSubmit,
  };

  const t_h1 = translations.publicPages.h1._signup[language];
  const t_p = translations.publicPages.p._signup[language];
  const t_email_label =
    translations.publicPages.form.signup.email._label[language];
  const t_email_placeholder =
    translations.publicPages.form.signup.email._placeholder[language];

  const t_password_label =
    translations.publicPages.form.signup.password.labels._password[language];
  const t_password_placeholder =
    translations.publicPages.form.signup.password.placeholders._password[
      language
    ];
  const t_confirm_password_label =
    translations.publicPages.form.signup.password.labels._confirmPassword[
      language
    ];
  const t_confirm_password_placeholder =
    translations.publicPages.form.signup.password.placeholders._confirmPassword[
      language
    ];

  const t_first_name_label =
    translations.publicPages.form.signup.firstName._label[language];
  const t_first_name_placeholder =
    translations.publicPages.form.signup.firstName._placeholder[language];
  const t_first_name_hint = ReactHtmlParser(
    translations.publicPages.form.signup.firstName._hint[language],
  );
  const t_last_name_label =
    translations.publicPages.form.signup.lastName._label[language];
  const t_last_name_placeholder =
    translations.publicPages.form.signup.lastName._placeholder[language];
  const t_last_name_hint = ReactHtmlParser(
    translations.publicPages.form.signup.lastName._hint[language],
  );
  const t_artist_name_label =
    translations.publicPages.form.signup.artistName._label[language];
  const t_artist_name_placeholder =
    translations.publicPages.form.signup.artistName._placeholder[language];
  const t_artist_name_hint = ReactHtmlParser(
    translations.publicPages.form.signup.artistName._hint[language],
  );
  const t_terms_checkbox =
    translations.publicPages.checkboxes._termsAndConditions[language];
  const t_stay_logged_checkbox =
    translations.publicPages.checkboxes._stayConnected[language];
  const t_button =
    translations.publicPages.button.signup._createAccount[language];
  const t_button_2 =
    translations.publicPages.button.signup._alreadyHasAccount[language];

  useEffect(() => {
    localStorage.removeItem('accessToken');
  }, []);
  return (
    <div className="content">
      {showModal && <CheckEmailModal setShowModal={setShowModal} {...props} />}
      <div className="header">
        <h1>{t_h1}</h1>
        <p>{t_p}</p>
      </div>
      <div className="toDo">Creation de compte avec réseau sociaux</div>

      <FormInput errors={form.fields.email.errors} {...commonProps}>
        <label htmlFor="email">{t_email_label}</label>
        <input
          type="text"
          id="email"
          value={form.fields.email.value}
          onChange={form.handlers.email}
          placeholder={t_email_placeholder}
        />
      </FormInput>
      <div className="row">
        <FormInput errors={form.fields.firstName.errors} {...commonProps}>
          <label htmlFor="firstName">{t_first_name_label}</label>
          <input
            type="text"
            id="firstName"
            value={form.fields.firstName.value}
            onChange={form.handlers.firstName}
            placeholder={t_first_name_placeholder}
          />
          <div className="hint">{t_first_name_hint}</div>
        </FormInput>
        <FormInput errors={form.fields.lastName.errors} {...commonProps}>
          <label htmlFor="lastName">{t_last_name_label}</label>
          <input
            type="text"
            id="lastName"
            value={form.fields.lastName.value}
            onChange={form.handlers.lastName}
            placeholder={t_last_name_placeholder}
          />
          <div className="hint">{t_last_name_hint}</div>
        </FormInput>
      </div>
      <FormInput errors={form.fields.artistName.errors} {...commonProps}>
        <label htmlFor="artistName">{t_artist_name_label}</label>
        <input
          type="text"
          id="artistName"
          value={form.fields.artistName.value}
          onChange={form.handlers.artistName}
          placeholder={t_artist_name_placeholder}
        />
        <div className="hint">{t_artist_name_hint}</div>
      </FormInput>
      <FormInput errors={form.fields.password.errors} {...commonProps}>
        <label htmlFor="password">{t_password_label}</label>
        <input
          type="password"
          id="password"
          value={form.fields.password.value}
          onChange={form.handlers.password}
          placeholder={`${isMobile ? '' : t_password_placeholder}`}
        />
        <div className="toDo">Validation de mot de passe</div>
      </FormInput>
      <FormInput errors={form.fields.confirmPassword.errors} {...commonProps}>
        <label htmlFor="confirmPassword">{t_confirm_password_label}</label>
        <input
          id="confirmPassword"
          type="password"
          value={form.fields.confirmPassword.value}
          onChange={form.handlers.confirmPassword}
          placeholder={`${isMobile ? '' : t_confirm_password_placeholder}`}
        />
      </FormInput>
      <FormInput
        errors={form.fields.termsChecked.errors}
        {...commonProps}
        className="toDo"
      >
        <Checkbox
          checked={form.fields.termsChecked.value}
          onChange={form.handlers.termsChecked}
          label={t_terms_checkbox}
        />
      </FormInput>

      <div className="buttons">
        {isMobile && (
          <button
            onClick={() => history.push('/login')}
            className="btn-secondary"
          >
            {t_button_2}
          </button>
        )}
        <button onClick={handleSubmit} className="btn-primary">
          {t_button}
        </button>
        <Checkbox
          className="toDo"
          checked={stayConnected}
          onChange={() => setStayConnected(!stayConnected)}
          label={t_stay_logged_checkbox}
        />
      </div>
    </div>
  );
};
