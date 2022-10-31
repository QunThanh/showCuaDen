import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/components/Layouts/component/Header';
import Nav from './Nav';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <Nav />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default defaultLayout;
