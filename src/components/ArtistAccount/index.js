import { faClipboardUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ArtistAccount.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ArtistAccount({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span> {data.full_name} </span>
               {data.tick && <FontAwesomeIcon className={cx('icon-staff')} icon={faClipboardUser} />}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </Link>
   );
}

export default ArtistAccount;
