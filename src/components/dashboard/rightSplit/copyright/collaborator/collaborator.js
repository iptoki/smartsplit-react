import { useState } from 'react';
import RoleBox from '../../_/roleBox/roleBox';
import colors from '../../_/colors';
import Ellipsis from '../../../../../icons/ellipsis';
import Dragger from '../../_/dragger/dragger';
import CollaboratorErrors from '../../_/collaboratorErrors/collaboratorErrors';
import Avatar from '../../../_/avatar/avatar';
import ArtistName from '../../../_/artistName/artistName';
import Slider from '../../../../_/form/slider/slider';
import Lock from '../../../../../icons/lock';
import Unlock from '../../../../../icons/unlock';
import Percentage from '../../../../_/form/percentage/percentage';
import checkLockedShareState from '../_/checkLockedShareState';

const Collaborator = (props) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  // AVATAR
  const collaboratorColor =
    colors[
      props.activeCollaboratorIds.indexOf(props.collaborator.rightHolder_id)
    ];

  // ELLIPSIS
  const handleEllipsisClick = () => {
    setIsShowingOptions((e) => !e);
  };
  const handleDeleteCollaboratorButton = () => {
    props.deleteCollaborator(props.collaborator.rightHolder_id);
  };

  // ROLE BOX
  const handleToggleRole = (role) => {
    const isPresent = props.collaborator.roles.some((el) => role === el);
    if (isPresent) {
      props.deleteRole(role, props.collaborator.rightHolder_id);
    } else {
      props.addRole(role, props.collaborator.rightHolder_id);
    }
  };

  // DRAGGER
  const setShares = (newShares) =>
    props.handleDrag({ newShares, id: props.id });
  const isDraggable =
    props.copyrightDividingMethod === 'manual' &&
    !props.copyright[props.id].lock;

  const collaboratorClassName =
    props.collaborator &&
    props.collaborator.errors &&
    props.collaborator.errors.length > 0 &&
    props.triedSubmit
      ? 'collaborator collaboratorErrors'
      : 'collaborator';

  const isYou = props.user.user_id === props.collaborator.rightHolder.user_id;
  const isLocked = props.copyright[props.id].lock;
  const handleLockBtn = () => {
    props.copyright[props.id].lock = !isLocked;
    checkLockedShareState(props.copyright, props.setCopyright, !isLocked);
  };
  // TEXTS
  const t_you = { fr: '(toi)', en: '(you)' }[props.language];
  const t_removeCollaborator =
    props.translations.rightSplit._removeCollaborator[props.language];
  const t_author =
    props.translations.rightSplit.copyrightRoles._author[props.language];
  const t_composer =
    props.translations.rightSplit.copyrightRoles._composer[props.language];
  const t_adapter =
    props.translations.rightSplit.copyrightRoles._adapter[props.language];
  const t_mixer =
    props.translations.rightSplit.copyrightRoles._mixer[props.language];

  // COMMON PROPS
  const commonProps = {
    ...props,
    isDraggable,
    setShares,
    handleToggleRole,
  };

  return (
    <>
      <div className={collaboratorClassName}>
        <div className="b1">
          {/* AVATAR */}
          <div className="rowAC">
            <Avatar
              user={props.collaborator.rightHolder}
              color={collaboratorColor}
            />
            <ArtistName
              user={props.collaborator.rightHolder}
              className="name"
            />
            {isYou && t_you}
          </div>

          {/* ELLIPSIS OPTIONS */}
          <div className="ellipsis" onClick={handleEllipsisClick}>
            <Ellipsis />
            {isShowingOptions && (
              <button onClick={handleDeleteCollaboratorButton}>
                {t_removeCollaborator}
              </button>
            )}
          </div>
        </div>

        <div className="space" />

        {/* ROLES */}
        <div className="roleRow">
          <RoleBox
            {...commonProps}
            arr={props.collaborator.roles}
            label={t_author}
            _role="author"
          />
          <RoleBox
            {...commonProps}
            arr={props.collaborator.roles}
            label={t_composer}
            _role="composer"
          />
          <RoleBox
            {...commonProps}
            arr={props.collaborator.roles}
            label={t_adapter}
            _role="adapter"
          />
          <RoleBox
            {...commonProps}
            arr={props.collaborator.roles}
            label={t_mixer}
            _role="mixer"
          />
        </div>

        <div className="shareRow">
          {props.copyrightDividingMethod === 'manual' && (
            <button
              className={`btn-icon ${
                props.collaborator.lock ? 'locked' : 'unlocked'
              }`}
              onClick={handleLockBtn}
            >
              {props.collaborator.lock ? <Lock /> : <Unlock />}
            </button>
          )}
          <Slider
            {...commonProps}
            color={collaboratorColor}
            value={props.collaborator.shares}
            onChange={setShares}
            disabled={!isDraggable}
          />
          <Percentage
            value={props.collaborator.shares}
            onChange={setShares}
            disabled={!isDraggable}
          />
        </div>
        {/* SHARES */}
      </div>
      <CollaboratorErrors {...commonProps} />
    </>
  );
};

export default Collaborator;
