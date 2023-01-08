import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Player } from 'video-react';

import Introduce from './Introduce';
import Artist from './Artist';
import videos from '~/assets/video';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx('wrapper')}>
         <Introduce />
         <div className={cx('background-video')}>
            <Player playsInline autoPlay={true} src={videos.tronTim} />
         </div>
         <Artist />
      </div>
   );
}

export default Home;
