import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//conponent
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Notify from '~/components/Notify';
import { Search } from '~/components/Layouts/component';

//logo vs img
import images from '~/assets/img';
import {
   faArrowRightToBracket,
   faCircleInfo,
   faCircleQuestion,
   faEarthAsia,
   faEllipsisVertical,
   faPaperPlane,
   faUser,
   faTicket,
   faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//variable
const cx = classNames.bind(styles);
const Tickets = [1, 2, 3, 4];
const numNotify = 8;
const currentUser = true;
const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: '_language',
               code: 'en',
               title: 'English',
            },
            {
               type: '_language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'FQAs', to: '/feedback' },
   { icon: <FontAwesomeIcon icon={faCircleInfo} />, title: 'Infomation' },
];

function Header() {
   //logic

   //handle logic
   const handleMenuChange = (menuItem) => {
      // console.log(menuItem.type);
      switch (menuItem.type) {
         case '_language':
            //handel change language
            break;

         default:
            break;
      }
   };

   const MENU_USER = [
      { icon: <FontAwesomeIcon icon={faUser} />, title: 'Profile', to: '/@User' },
      { icon: <FontAwesomeIcon icon={faTicket} />, title: 'Tickets', to: '/mytickets' },
      ...MENU_ITEMS,
      { icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />, title: 'Log Out', to: '/logout', hasLine: true },
   ];

   //reder UI
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={'/'} className={cx('logo')}>
               <img
                  src={images.logoDV}
                  alt="logo DV"
                  style={{
                     height: 60,
                     width: 80,
                  }}
               />
            </Link>

            <div className={cx('nav')}>
               <Button text>Introduce</Button>
               <Button text>Artist</Button>
               <Button disable={Tickets.length > 0 ? false : true} gold>
                  {Tickets.length > 0 ? 'Tickets' : 'Sold out'}
               </Button>
               <Button text>Map</Button>
            </div>

            <Search></Search>

            <div className={cx('setting')}>
               {currentUser ? (
                  <>
                     <Tippy content="Contact" placement="bottom">
                        <div className={cx('icon')}>
                           <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                     </Tippy>
                     <Tippy content="Note" placement="bottom">
                        <div className={cx('icon')}>
                           <Notify number={numNotify} />
                        </div>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Tippy interactive placement="left" content="Login">
                        <div className={cx('icon')}>
                           <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </div>
                     </Tippy>
                  </>
               )}
               <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image className={cx('user-avatar')} alt={'avatar-user'} src={images.avatar}></Image>
                  ) : (
                     <div className={cx('icon-menu')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </div>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
