import { faClipboardUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ArtistAccount.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ArtistAccount({ data }) {
   return (
      <div className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span> {data.full_name} </span>
               {data.tick && <FontAwesomeIcon className={cx('icon-staff')} icon={faClipboardUser} />}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </div>
   );
}

export default ArtistAccount;
