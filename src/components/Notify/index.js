import styles from './Notify.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Notify({ icon, number = 0 }) {
   return (
      <div className={cx('wrapper')}>
         {icon ? icon : <FontAwesomeIcon icon={faBell} />}
         {number > 0 && <span className={cx('num-item')}>{number > 9 ? '..' : number}</span>}
      </div>
   );
}

export default Notify;
