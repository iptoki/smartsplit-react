import { useState } from 'react';
import colors from '../../_/colors';
import Ellipsis from '../../../../../icons/ellipsis';
import Dragger from './dragger/dragger';
import CollaboratorErrors from '../../_/collaboratorErrors/collaboratorErrors';
import Avatar from '../../../_/avatar/avatar';

const Collaborator = (props) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  console.log(props);
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
  const setLock = (newState) => {
    const arr = [...props.copyright];
    arr[props.id].lock = newState;
    props.setCopyright(arr);
  };
  const isDraggable = true;

  const collaboratorClassName =
    props.collaborator &&
    props.collaborator.errors &&
    props.collaborator.errors.length > 0 &&
    props.triedSubmit
      ? 'collaborator collaboratorErrors'
      : 'collaborator';

  // TEXTS
  const t_initials = `${props.collaborator.rightHolder.firstName[0]}${props.collaborator.rightHolder.lastName[0]}`;
  const t_userName = `${props.collaborator.rightHolder.firstName} ${props.collaborator.rightHolder.lastName}`;
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
    setLock,
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
            <div className="name">{t_userName}</div>
          </div>

          {/* ELLIPSIS OPTIONS */}
          <div className="ellipsis" onClick={handleEllipsisClick}>
            {props.showEllipsis && <Ellipsis />}
            {isShowingOptions && (
              <button onClick={handleDeleteCollaboratorButton}>
                {t_removeCollaborator}
              </button>
            )}
          </div>
        </div>

        <div className="space" />

        {/* SHARES */}
        <Dragger {...commonProps} />
      </div>
      <CollaboratorErrors {...commonProps} />
    </>
  );
};

export default Collaborator;
