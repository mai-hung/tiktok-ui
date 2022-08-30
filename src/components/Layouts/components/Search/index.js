import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaRegTimesCircle, FaCircleNotch } from 'react-icons/fa';

import { WrapPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { Search as SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
    const [resultsSearch, setResultsSearch] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(valueSearch, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            setResultsSearch([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setResultsSearch(res.data);
                setLoading(false);
                return res;
            })
            .catch((err) => {
                setLoading(false);
                throw new Error(err);
            });
    }, [debounceValue]);

    const handleClose = () => {
        setValueSearch('');
        setResultsSearch([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult && resultsSearch.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapPopper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {resultsSearch.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
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
                {!!loading && <FaCircleNotch className={cx('action-icon', 'loading')} />}
                {/* close icon */}
                {valueSearch && !loading ? (
                    <FaRegTimesCircle className={cx('action-icon')} onClick={handleClose} />
                ) : (
                    <></>
                )}

                <button className={cx('btn-search')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
