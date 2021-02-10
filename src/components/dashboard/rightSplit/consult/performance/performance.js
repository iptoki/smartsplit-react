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

const Performance = (props) => (
  <div style={style.b1}>
    <SectionTitle value="Performance" />
    <Modify {...props} destination="performance" />
    {props.workpiece.rightSplit.performance.map((collaborator, id) => (
      <Collaborator
        {...props}
        collaborator={collaborator}
        key={collaborator.rightHolder.user_id}
        setVote={props.setPerformance}
        voteValue={props.performance}
      />
    ))}
  </div>
);

export default Performance;