import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

//component
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   //logic
   const renderItems = () => {
      return items.map((item, index) => <MenuItems key={index} data={item} />);
   };

   //render UI
   return (
      <Tippy
         interactive
         delay={[0, 800]}
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
