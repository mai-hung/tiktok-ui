import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaRegTimesCircle } from 'react-icons/fa';

import { WrapPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { Search as SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [results, setResults] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setResults([]);
        }, 0);
    }, []);

    const handleClose = () => {
        setValueSearch('');
        setResults([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult && results.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapPopper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </WrapPopper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Enter accounts and videos"
                    className={cx('input')}
                    value={valueSearch}
                    spellCheck={false}
                    ref={inputRef}
                    onChange={(e) => {
                        setValueSearch(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {/* <FaCircleNotch className={cx('action-icon')} /> */}
                {/* close icon */}
                {valueSearch ? <FaRegTimesCircle className={cx('action-icon')} onClick={handleClose} /> : <></>}

                <button className={cx('btn-search')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
