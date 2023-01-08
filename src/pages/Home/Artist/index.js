import styles from './Artist.module.scss';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
import images from '~/assets/img';
import GuestItem from '~/components/GuestItem';

const cx = classNames.bind(styles);

function Artist() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <Image className={cx('title-guest')} src={images.text.textGuest} />
            <div className={cx('line')}></div>
         </div>
         <div className={cx('container-guest')}>
            <GuestItem src={images.frontFace.kimmie} nameGuest="Kimmie" />
            <GuestItem src={images.frontFace.linh} nameGuest="Linh Cao" />
            <GuestItem src={images.frontFace.lynk} nameGuest="Lynk Lee" />
            <GuestItem src={images.frontFace.ngot} nameGuest="Ngot Band" />
            <GuestItem src={images.frontFace.vu} nameGuest="Vu" />
         </div>
      </div>
   );
}

export default Artist;
