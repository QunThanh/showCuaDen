import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

//component
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ArtistAccount from '~/components/ArtistAccount';
import TicketItem from '~/components/TicketItem';

//logo vs img
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(true);

   const inputRef = useRef();

   useEffect(() => {
      console.log('searchValue', searchValue);
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=h&type=less`)
         .then((res) => res.json())
         .then((res) => {
            console.log('res.data', res.data);
            setSearchResult(res.data);
         });
   }, [searchValue]);

   //handle
   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadlessTippy
         onClickOutside={handleHideResult}
         visible={showResult && searchResult.length > 0}
         interactive="true"
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Tickets:</h4>
                  <TicketItem />
                  <TicketItem />
                  {searchResult.length > 0 && <h4 className={cx('search-title')}>Staffs:</h4>}
                  {searchResult.map((result) => {
                     <ArtistAccount key={result.id} data={result} />;
                  })}
               </PopperWrapper>
            </div>
         )}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search something ..."
               spellCheck={false}
               onChange={(e) => {
                  setSearchValue(e.target.value);
               }}
               onFocus={() => {
                  setShowResult(true);
               }}
            />
            {!!searchValue && (
               <button className={cx('clear-btn')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faXmark} />
               </button>
            )}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
