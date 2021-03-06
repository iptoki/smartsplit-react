import { useHistory } from 'react-router-dom';
import Music from '../../../../icons/music';
import Cog from '../../../../icons/cog';

export default function MobileDownBar({ current }) {
  const history = useHistory();

  return (
    <div className="mobileDownBar">
      <button className="btn-icon" onClick={() => history.push('/')}>
        <Music color={current === 'workpieces' ? '#2DA84F' : '#8DA0B3'} />
      </button>
      <button className="btn-icon" onClick={() => history.push('/settings')}>
        <Cog color={current === 'settings' ? '#2DA84F' : '#8DA0B3'} />
      </button>
    </div>
  );
}
