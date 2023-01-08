import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

//routes config
import routesConfig from '~/configs/routes';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Nav() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      let scrollHandle = () => {
         const currentPosition = document.documentElement.scrollTop;

         if (currentPosition > 80) setIsActive((current) => (current = true));
         else setIsActive((current) => (current = false));
      };

      window.addEventListener('scroll', scrollHandle);

      return () => window.removeEventListener('scroll', scrollHandle);
   });

   return (
      <div className={cx('wrapper')}>
         {isActive ? (
            <ul id={cx('nav_list')}>
               <a href="#">
                  <li>
                     <p className={cx('circle')}></p>
                     <p className={cx('text_nav')}>Introduce</p>
                  </li>
               </a>

               <a href="#">
                  <li>
                     <p className={cx('circle')}></p>
                     <p className={cx('text_nav')}>Artist</p>
                  </li>
               </a>

               <a href="#">
                  <li>
                     <p className={cx('circle')}></p>
                     <p className={cx('text_nav')}>Tickets</p>
                  </li>
               </a>

               <a href="#">
                  <li>
                     <p className={cx('circle')}></p>
                     <p className={cx('text_nav')}>Map</p>
                  </li>
               </a>
            </ul>
         ) : (
            ''
         )}
      </div>
   );
}

export default Nav;
