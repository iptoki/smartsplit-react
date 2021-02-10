import SectionTitle from '../_/sectionTitle/sectionTitle';
import Collaborator from '../_/collaborator/collaborator';
import Modify from '../_/modify/modify';

const style = {
  b1: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
  },
};

const Recording = (props) => (
  <div style={style.b1}>
    <SectionTitle value="Recording" />
    <Modify {...props} destination="recording" />
    {props.workpiece.rightSplit.recording.map((collaborator, id) => (
      <Collaborator
        {...props}
        collaborator={collaborator}
        key={collaborator.rightHolder.user_id}
        setVote={props.setRecording}
        voteValue={props.recording}
      />
    ))}
  </div>
);

export default Recording;