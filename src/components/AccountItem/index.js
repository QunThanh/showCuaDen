import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ urlAvatar }) {
   return (
      <div className={cx('wrapper')}>
         <img className={cx('avatar')} src={urlAvatar} alt="imgAcc" />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span> Thanh Le </span>
               <FontAwesomeIcon className={cx('icon-staff')} icon={faClipboardUser} />
            </p>
            <span className={cx('username')}>thanhle1408</span>
         </div>
      </div>
   );
}

export default AccountItem;
