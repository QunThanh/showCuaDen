import classNames from 'classnames/bind';
import styles from './GuestItem.module.scss';
import Image from '~/components/Image';

import images from '~/assets/img';

const cx = classNames.bind(styles);

function GuestItem({ src = images.avatar, nameGuest = 'name guest', ...props }) {
   return (
      <div className={cx('wrapper')} {...props}>
         <div className={cx('img')}>
            <Image className={cx('guest-img')} alt={nameGuest} src={src} />
         </div>
         <div className={cx('guest-name')}>{nameGuest}</div>
      </div>
   );
}

export default GuestItem;
