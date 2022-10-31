import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
   return (
      <div className={cx('wrapper')}>
         <h2>Nav</h2>
      </div>
   );
}

export default Nav;
