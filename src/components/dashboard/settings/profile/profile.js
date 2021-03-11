import ReactHtmlParser from 'react-html-parser';
import MultiSelect from '../../../_/form/multiSelect/multiSelect';

export default function Profile(props) {
  const { form, updateUser, translations, language } = props;
  const t_h2 = translations.settings.titles._profile[language];
  const t_first_name_label =
    translations.settings.fields.firstName._label[language];
  const t_first_name_placeholder =
    translations.settings.fields.firstName._placeholder[language];
  const t_first_name_hint = ReactHtmlParser(
    translations.settings.fields.firstName._hint[language],
  );
  const t_last_name_label =
    translations.settings.fields.lastName._label[language];
  const t_last_name_placeholder =
    translations.settings.fields.lastName._placeholder[language];
  const t_last_name_hint = ReactHtmlParser(
    translations.settings.fields.lastName._hint[language],
  );
  const t_artist_name_label =
    translations.settings.fields.artistName._label[language];
  const t_artist_name_placeholder =
    translations.settings.fields.artistName._placeholder[language];
  const t_artist_name_hint = ReactHtmlParser(
    translations.settings.fields.artistName._hint[language],
  );
  const t_projects_label =
    translations.settings.fields.projects._label[language];
  const t_projects_placeholder =
    translations.settings.fields.projects._placeholder[language];
  return (
    <div className="profile" id="profile">
      <h2>{t_h2}</h2>
      <div className="row">
        <div className="formInput">
          <label htmlFor="firstName">{t_first_name_label}</label>
          <input
            type="text"
            id="firstName"
            value={form.fields.firstName.value}
            onChange={form.handlers.firstName}
            onBlur={updateUser}
            placeholder={t_first_name_placeholder}
          />
          <div className="hint">{t_first_name_hint}</div>
        </div>
        <div className="formInput">
          <label htmlFor="lastName">{t_last_name_label}</label>
          <input
            type="text"
            id="lastName"
            value={form.fields.lastName.value}
            onChange={form.handlers.lastName}
            onBlur={updateUser}
            placeholder={t_last_name_placeholder}
          />
          <div className="hint">{t_last_name_hint}</div>
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="artistName">{t_artist_name_label}</label>
        <input
          type="text"
          id="artistName"
          value={form.fields.artistName.value}
          onChange={form.handlers.artistName}
          onBlur={updateUser}
          placeholder={t_artist_name_placeholder}
        />
        <div className="hint">{t_artist_name_hint}</div>
      </div>
      <div className="formInput toDo">
        <label htmlFor="projects">{t_projects_label}</label>
        <MultiSelect
          id="projects"
          value={form.fields.projects.value}
          onChange={form.handlers.projects}
          onBlur={updateUser}
          placeholder={t_projects_placeholder}
        />
      </div>
    </div>
  );
}
