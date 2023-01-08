import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';

//component
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Introduce() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('content-banner')}>
            <div className={cx('img-content')}>
               <Image className={cx('img-vu')} src={images.face.vu} />
               <Image className={cx('img-linh')} src={images.face.linh} />
               <Image className={cx('img-ngot')} src={images.face.ngot} />
               <Image className={cx('img-lynk')} src={images.face.lynk} />

               <Image className={cx('img-kimmie')} src={images.face.kimmie} />
               <Image className={cx('img-denvau')} src={images.face.denVau} />
               <Image className={cx('img-text')} src={images.text.textShowCuaDen} />
            </div>

            <div className={cx('content-text')}>
               <div className={cx('time-text')}>20:00 - 09/11/2023</div>
               <div className={cx('location-text')}>
                  NHÀ THI ĐẤU QUÂN KHU 7
                  <div className={cx('description-text')}> 202 HOÀNG VĂN THỤ, P.9, Q.TÂN BÌNH, TP. HỒ CHÍ MINH</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Introduce;
