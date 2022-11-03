import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

//conponent
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import TicketItem from '~/components/TicketItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

//logo vs img
import images from '~/assets/img';
import {
   faArrowRightToBracket,
   faCircleInfo,
   faCircleQuestion,
   faEarthAsia,
   faEllipsisVertical,
   faMagnifyingGlass,
   faSpinner,
   faXmark,
} from '@fortawesome/free-solid-svg-icons';

//variable
const cx = classNames.bind(styles);
const Tickets = [1, 2, 3, 4];
const MENU_ITEMS = [
   { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'Englist' },
   { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'FQAs', to: '/feedback' },
   { icon: <FontAwesomeIcon icon={faCircleInfo} />, title: 'Infomation' },
];

function Header() {
   //logic
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => setSearchResult([]), 3000);
   });

   //reder UI
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img
                  src={images.logoDV}
                  alt="logo DV"
                  style={{
                     height: 60,
                     width: 80,
                  }}
               />
            </div>

            <div className={cx('nav')}>
               <Button text>Introduce</Button>
               <Button text>Artist</Button>
               <Button disable={Tickets.length > 0 ? false : true} gold>
                  {Tickets.length > 0 ? 'Tickets' : 'Sold out'}
               </Button>
               <Button text>Map</Button>
            </div>

            <Tippy
               visible={searchResult.length > 0}
               interactive="true"
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Tickets:</h4>
                        <TicketItem />
                        <TicketItem />
                        <h4 className={cx('search-title')}>Staffs:</h4>
                        <AccountItem urlAvatar={images.avatar} />
                        <AccountItem urlAvatar={images.avatar} />
                        <AccountItem urlAvatar={images.avatar} />
                        <AccountItem urlAvatar={images.avatar} />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search something ..." spellCheck={false} />
                  <button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>

            <div className={cx('setting')}>
               <Tippy interactive placement="left" render={(attrs) => <h6>Login</h6>}>
                  <div className={cx('icon')}>
                     <FontAwesomeIcon icon={faArrowRightToBracket} />
                  </div>
               </Tippy>
               <Menu items={MENU_ITEMS}>
                  <div className={cx('icon-menu')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
