import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

//component
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
   //logic
   const [access, setAccess] = useState([{ data: items }]);

   const currentAccess = access[access.length - 1];

   const renderItems = () => {
      return currentAccess.data.map((item, index) => {
         const hasChilren = !!item.children;
         return (
            <MenuItems
               key={index}
               data={item}
               onClick={() => {
                  if (hasChilren) {
                     setAccess((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   //render UI
   return (
      <Tippy
         interactive
         delay={[0, 800]}
         placement="bottom-end"
         onHidden={() => {
            setAccess((prev) => prev.slice(0, 1));
         }}
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {access.length > 1 && (
                     <Header
                        title={'Language'}
                        onBack={() => {
                           setAccess((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
