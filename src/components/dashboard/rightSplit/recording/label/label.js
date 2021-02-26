import { useState } from 'react';
import NotificationBox from './notificationBox/notificationBox';
import Dragger from '../../_/dragger/dragger';
import Ellipsis from '../../../../../icons/ellipsis';
import colors from '../../_/colors';
import setLabelErrors from '../_/setLabelErrors';
import CollaboratorErrors from '../../_/collaboratorErrors/collaboratorErrors';

const Collaborator = (props) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  // AVATAR
  const avatarStyle = {
    backgroundColor:
      colors[
        props.activeCollaboratorsIds.indexOf(props.collaborator.rightHolder_id)
      ],
  };

  // ELLIPSIS
  const handleEllipsisClick = () => {
    setIsShowingOptions((e) => !e);
  };

  const setLock = (newState) => {
    props.setLabel({ ...props.label, lock: newState });
  };

  const setShares = (newShares) => {
    props.handleDrag({
      newShares,
      draggedRightHolder_id: props.collaborator.rightHolder_id,
    });
  };

  const handleAgreementDuration = (e) => {
    let label = { ...props.label };
    label.agreementDuration = e.target.value;
    label = setLabelErrors(label);
    props.setLabel(label);
  };

  const handleNotifyViaEmail = () => {
    props.setLabel({
      ...props.label,
      notifViaEmail: !props.label.notifViaEmail,
    });
  };

  const handleNotifViaText = () => {
    props.setLabel({
      ...props.label,
      notifViaText: !props.label.notifViaText,
    });
  };

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
  const t_notifViaEmail =
    props.translations.rightSplit.recordingLabelNotification._notifViaEmail[
      props.language
    ];
  const t_notifViaText =
    props.translations.rightSplit.recordingLabelNotification._notifViaText[
      props.language
    ];
  const t_notifyPresentation =
    props.translations.rightSplit.recordingLabelNotification
      ._notifyPresentation[props.language];

  const agreementDurationOptions = [
    'oneYear',
    'twoYears',
    'threeYears',
    'fourYears',
    'fiveYears',
    'renew',
  ];

  const get_t_recordingLabelDealTimeLapse = (value) =>
    props.translations.rightSplit.recordingLabelDealTimeLapse[`_${value}`][
      props.language
    ];

  const t_removeCollaborator =
    props.translations.rightSplit._removeCollaborator[props.language];

  const commonProps = {
    ...props,
    setLock,
    setShares,
  };
  return (
    <>
      <div className={collaboratorClassName}>
        <div className="b1">
          <div className="rowAC">
            <div className="avatar" style={avatarStyle}>
              {t_initials}
            </div>
            <div className="name">{t_userName}</div>
          </div>

          <div className="ellipsis" onClick={handleEllipsisClick}>
            <Ellipsis />
            {isShowingOptions && (
              <button onClick={props.deleteCollaborator}>
                {t_removeCollaborator}
              </button>
            )}
          </div>
        </div>
        <div className="space" />

        <select
          className="selectStatus"
          value={props.collaborator.agreementDuration}
          onChange={handleAgreementDuration}
        >
          <option disabled value="">
            Durée de l'entente
          </option>
          {agreementDurationOptions.map((el) => (
            <option key={el} value={el}>
              {get_t_recordingLabelDealTimeLapse(el)}
            </option>
          ))}
        </select>
        <div className="notifyPresentation">{t_notifyPresentation}</div>
        <div className="roleRow">
          <NotificationBox
            label={props.label}
            tag={t_notifViaEmail}
            value={props.label.notifViaEmail}
            toggle={handleNotifyViaEmail}
          />
          <NotificationBox
            label={props.label}
            tag={t_notifViaText}
            value={props.label.notifViaText}
            toggle={handleNotifViaText}
          />
        </div>

        <Dragger {...commonProps} isDraggable />
      </div>
      <CollaboratorErrors {...commonProps} />
    </>
  );
};

export default Collaborator;
