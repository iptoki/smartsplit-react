import Avatar from '../../../../_/avatar/avatar';
import colors from '../../../_/colors';
import ArtistName from '../../../../_/artistName/artistName';

const Collaborator = (props) => {
  console.log('PROPS', props);
  const { shares, vote, roles, rightHolder, comment } = props.collaborator;
  const { firstName, lastName } = rightHolder;
  const handleAccept = () =>
    props.setVote('copyright', {
      vote: 'accepted',
      comment: '',
    });
  const handleReject = () =>
    props.setVote('copyright', { vote: 'rejected', comment: '' });
  const handleCommentChange = (e) =>
    props.setVote('copyright', { vote: 'rejected', comment: e.target.value });
  const user_id = localStorage.getItem('user_id');
  const isUserVoting =
    user_id === props.collaborator.rightHolder_id && vote === 'undecided';

  const collaboratorColor =
    colors[
      props.activeCollaboratorIds.indexOf(props.collaborator.rightHolder_id)
    ];
  const isYou = props.user.user_id === props.collaborator.rightHolder.user_id;

  // TEXTS
  const t_you = { fr: '(toi)', en: '(you)' }[props.language];
  return (
    <>
      <div className="consultCollaborator">
        <Avatar user={rightHolder} color={collaboratorColor} />
        <div className="infos">
          <div>
            <ArtistName className="name" user={rightHolder} />
            {isYou && `\u00A0${t_you}`}
            <div className="roles">
              {roles.map((role) => (
                <div className="role" key={role}>
                  {role}
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="shares">{`${shares.toFixed(1)} %`}</div>
            {vote === 'accepted' && (
              <div className="voteAccepted">{props.t_accepted}</div>
            )}
            {vote === 'rejected' && (
              <div className="voteRejected">{props.t_rejected}</div>
            )}
            {vote === 'undecided' && (
              <div className="voteUndecided">{props.t_undecided}</div>
            )}
          </div>
        </div>
      </div>
      {!props.voting && !isUserVoting && comment && (
        <div className="comment">
          <div>${props.t_comments}</div>
          {comment}
        </div>
      )}

      {props.voting && isUserVoting && (
        <div className="voting">
          <div className="buttons">
            <button
              onClick={handleReject}
              className={`reject ${
                props.votes.copyright.vote === 'rejected'
                  ? 'rejectSelected'
                  : ''
              }`}
            >
              {props.t_no}
            </button>
            <button
              onClick={handleAccept}
              className={`accept ${
                props.votes.copyright.vote === 'accepted'
                  ? 'acceptSelected'
                  : ''
              }`}
            >
              {props.t_yes}
            </button>
          </div>
          {props.votes.copyright.vote === 'rejected' && (
            <textarea
              value={props.votes.copyright.comment}
              onChange={handleCommentChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Collaborator;
