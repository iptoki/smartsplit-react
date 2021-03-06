import { useState, useEffect } from 'react';
import {
  Link,
  useHistory,
  useParams,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';
import MobileTopBar from '../_/mobileTopBar/mobileTopBar';
import MobileDownBar from '../_/mobileDownBar/mobileDownBar';
import Profile from './profile/profile';
import Account from './account/account';
import ProfessionalIdentity from './professionalIdentity/professionalIdentity';
import Notifications from './notifications/notifications';
import Security from './security/security';
import ArrowLeft from '../../../icons/arrowLeft';
import ProfilePlaceholder from '../../../icons/profilePlaceholder';
import patchUser from '../../../api/users/patchUser';
import getUsers from '../../../api/users/getUsers';
import useForm from '../../_/form/useForm';
import Avatar from '../_/avatar/avatar';
import MobileSettingMenu from './mobileSettingMenu/mobileSettingMenu';
import MobileAccount from './mobileAccount/mobileAccount';
import Pen from '../../../icons/pen';

export default function Settings(props) {
  const { user, translations, language, isMobile } = props;
  const history = useHistory();
  const { section } = useParams();
  const isMainMenu = useRouteMatch({ path: '/settings', strict: true }).isExact;
  const form = useForm(
    {
      firstName: { value: '', errors: [], validators: ['required'] },
      lastName: { value: '', errors: [], validators: ['required'] },
      artistName: { value: '', errors: [], validators: ['required'] },
      projects: { value: [], errors: [] },
      address: { value: '', errors: [] },
      locale: { value: '', errors: [] },
      phoneNumber: { value: '', errors: [] },
      emails: { value: [], errors: [] },
      organisations: { value: [], errors: [] },
      professionalIdentity: {
        value: {
          ids: [],
          public: false,
        },
        errors: [],
      },
      birthDate: { value: '', errors: [] },
      isni: { value: '', errors: [] },
      uri: { value: '', errors: [] },
      notifications: {
        value: {
          generalInteractions: ['email'],
          administrativeMessages: ['email'],
          accountLogin: [],
          smartsplitBlog: [],
          smartsplitPromotions: [],
          partnerPromotions: [],
        },
        errors: [],
      },
    },
    true,
  );

  const [triedSubmit, setTriedSubmit] = useState(false);
  const updateUser = async () => {
    if (form.isValid()) {
      await patchUser({ user_id: user.user_id, ...form.toJS() });
      form.cleanFields();
      props.refreshUser();
    }
    setTriedSubmit(true);
  };

  const handleBlur = () => {
    !isMobile && updateUser();
  };

  useEffect(() => {
    form.loadFields({
      ...user,
      phoneNumber: user.mobilePhone.number,
    });
  }, []);
  const backAction = () => history.push('/settings');
  const t_title = section
    ? translations.settings.mobileMenu[`_${section}`][language]
    : null;
  const t_button = {
    fr: 'Sauvegarder',
    en: 'Save',
  }[language];
  const commonProps = {
    ...props,
    form,
    updateUser,
    handleBlur,
    triedSubmit,
  };

  return (
    <div className="settings">
      {isMobile && (
        <>
          {isMainMenu && (
            <div className="topBar">
              <div className="mobileHeader">
                <div>
                  <Avatar id="avatar" className="small" user={user} />
                  {user.artistName && <h1>{user.artistName}</h1>}
                  {user.firstName && user.lastName && (
                    <p className="medium-400">{`${user.firstName} ${user.lastName}`}</p>
                  )}
                </div>
                <button
                  className="btn-icon"
                  onClick={() => {
                    history.push('/settings/public-profile');
                  }}
                >
                  <Pen />
                </button>
              </div>
            </div>
          )}
          {!isMainMenu && (
            <MobileTopBar
              back={backAction}
              noShadow={section === 'account'}
              action={
                <button className="btn-secondary" onClick={updateUser}>
                  {t_button}
                </button>
              }
              {...commonProps}
            >
              {t_title}
            </MobileTopBar>
          )}
          <main
            className={
              section === 'account' || section === undefined ? 'noMaxWidth' : ''
            }
          >
            <Switch>
              <Route path="/settings/public-profile">
                <Profile {...commonProps} />
              </Route>
              <Route path="/settings/account">
                <MobileAccount {...commonProps} />
              </Route>
              <Route path="/settings">
                <MobileSettingMenu {...commonProps} />
              </Route>
              {/*<Route path="/settings/preferences">
            <Notifications {...commonProps} />
          </Route>*/}
            </Switch>
          </main>
          {isMainMenu && <MobileDownBar current="settings" />}
        </>
      )}
      {!isMobile && (
        <>
          <div className="topBar">
            <Link to="/">
              <ArrowLeft />
            </Link>
            <Avatar className="small" user={user} />
          </div>
          <main className="row">
            {/*<div className="colLeft">
          <div className="navigation">
            <NavHashLink
              smooth
              activeClassName="selected"
              to="/settings#profile"
            >
              Profil
            </NavHashLink>
            <NavHashLink
              smooth
              activeClassName="selected"
              to="/settings#account"
            >
              Compte
            </NavHashLink>
            <NavHashLink
              smooth
              activeClassName="selected"
              to="/settings#professional-identity"
            >
              Identité professionnelle
            </NavHashLink>
            <NavHashLink
              smooth
              activeClassName="selected"
              to="/settings#notifications"
            >
              Notifications
            </NavHashLink>
            <NavHashLink
              smooth
              activeClassName="selected"
              to="/settings#security"
            >
              Sécurité
            </NavHashLink>
          </div>
        </div>*/}
            <div className="colRight">
              <Profile {...commonProps} />
              <Account {...commonProps} />
              <ProfessionalIdentity {...commonProps} />
              {/*<Notifications {...commonProps} className="toDo" />*/}
              {/*<Security {...commonProps} />*/}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
