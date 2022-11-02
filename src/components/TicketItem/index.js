import styles from './Ticket.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TicketItem() {
   let type = 'platinum';
   let showName = "Đen's Show";
   let price = '900.000';

   return (
      <div className={cx('wrapper')}>
         <FontAwesomeIcon className={cx(type)} icon={faTicket} />
         <div>
            <div className={cx('seat-class')}>
               <p>{showName}</p>
               <p className={cx(type)}>{`(${type})`}</p>
            </div>
            <span className={cx('price')}>{`${price} đ`}</span>
         </div>
      </div>
   );
}

export default TicketItem;
