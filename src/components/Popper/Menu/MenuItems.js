import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
   const classes = cx('menu-item', {
      hasLine: data.hasLine,
   });

   return (
      <Button className={classes} LeftIcon={data.icon} to={data.to} onClick={onClick}>
         {data.title}
      </Button>
   );
}

export default MenuItems;
