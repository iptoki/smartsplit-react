import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Tile from './tile/tile';
import PenIcon from '../../../icons/pen';
import ArrowLeft from '../../../icons/arrowLeft';
import AddOrEditWorkpieceModal from '../_/addOrEditWorkpieceModal/addOrEditWorkpieceModal';
import Collaborators from './collaborators/collaborators';
import ProfileOptions from '../_/profileOptions/profileOptions';
import CoverImage from '../_/coverImage/coverImage';
import LastModified from '../_/lastModified/lastModified';
import ArtistName from '../_/artistName/artistName';
import MobileOrientation from './mobileOrientation/mobileOrientation';

const Orientation = (props) => {
  const [tab, setTab] = useState('task');
  const history = useHistory();
  const { workpiece_id } = useParams();
  const [isEditingWorkpiece, setIsEditingWorkpiece] = useState(false);
  const [isEditingCollaborators, setIsEditingCollaborators] = useState(false);
  const handleBackButton = async () => {
    history.push('/');
  };
  const hasEditPermission =
    props.user.user_id === props.workpiece.owner.user_id;

  const t_createdBy = {
    fr: 'Créé par',
    en: 'Created by',
  }[props.language];
  const t_tasks = {
    fr: 'Tâches',
    en: 'Tasks',
  }[props.language];
  const t_modified = {
    fr: 'Mis à jour',
    en: 'Modified',
  }[props.language];
  const t_title = props.workpiece.title;

  const handleEditWorkpiece = () => setIsEditingWorkpiece(true);
  const handleSelectTask = () => setTab('task');
  const taskTabClassName = `tab ${tab === 'task' ? 'selectedTab' : ''}`;

  const commonProps = {
    ...props,
    workpiece_id,
    handleBackButton,
    t_createdBy,
    t_tasks,
    t_modified,
    t_title,
    hasEditPermission,
  };
  return (
    <>
      {!props.isMobile && (
        <div className="orientation">
          {/** EDIT WORKPIECE MODAL */}
          {isEditingWorkpiece && (
            <AddOrEditWorkpieceModal
              {...commonProps}
              setShowModal={setIsEditingWorkpiece}
            />
          )}

          {/** EDIT COLLABORATORS MODAL */}
          {isEditingCollaborators && (
            <Collaborators
              {...commonProps}
              setShowModal={setIsEditingCollaborators}
            />
          )}

          <div className="b1">
            <div className="content">
              {/** TOP BAR SECTION ONE */}
              <div className="b1">
                <div className="back" onClick={handleBackButton}>
                  <ArrowLeft />
                </div>
                <div className="right">
                  <ProfileOptions {...commonProps} />
                </div>
              </div>

              {/** TOP BAR SECTION TWO */}
              <div className="b2">
                <div className="left">
                  <CoverImage {...commonProps} className="medium" />
                  <div className="description">
                    <div className="title">
                      {props.workpiece.title}
                      {hasEditPermission && (
                        <button
                          className="btn-icon"
                          onClick={handleEditWorkpiece}
                        >
                          <PenIcon />
                        </button>
                      )}
                    </div>
                    <div className="details">
                      {t_createdBy}
                      <ArtistName
                        user={props.workpiece.owner}
                        className="artistName"
                      />
                      {' · '}
                      <LastModified {...commonProps}>{t_modified}</LastModified>
                    </div>
                  </div>
                </div>
              </div>

              {/** TOP BAR SECTION THREE */}
              <div className="b3">
                <button className={taskTabClassName} onClick={handleSelectTask}>
                  {t_tasks}
                </button>
                <span className="space" />
              </div>
            </div>
          </div>

          {/** TILES SECTION */}
          <div className="b2">
            <div className="tileSection">
              <Tile tileId="share" {...commonProps} />
              <div className="space" />
              {/* <Tile tileId="document" {...commonProps} />
          <div className="space" /> */}
              <Tile tileId="protect" {...commonProps} />
              <div className="space" />
              <Tile tileId="monetize" {...commonProps} />
              {/* <div className="space" /> */}
              {/* <Tile tileId="" {...commonProps} /> */}
            </div>
          </div>
        </div>
      )}
      {props.isMobile && <MobileOrientation {...commonProps} />}
    </>
  );
};

export default Orientation;
