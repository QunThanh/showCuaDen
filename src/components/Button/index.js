import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   children,
   text = false,
   gold = false,
   outline = false,
   disable = false,
   small = false,
   large = false,
   LeftIcon = false,
   RightIcon = false,
   onClick,
   className,
   ...passProps
}) {
   let Comp = 'button';

   const props = {
      onClick,
      ...passProps,
   };

   if (disable) {
      delete props.onClick;
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      text,
      gold,
      outline,
      disable,
      LeftIcon,
      RightIcon,
      small,
      large,
   });

   return (
      <Comp className={classes} {...props}>
         {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
      </Comp>
   );
}

export default Button;
