import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { Header } from '~/components/Layouts/component/';
import Nav from './Nav';
import Image from '~/components/Image';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Image className={cx('background')} src={images.backgroundBanner} />
         <Header />
         <div className={cx('container')}>
            <Nav />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default defaultLayout;
