import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaRegTimesCircle, FaCircleNotch } from 'react-icons/fa';

import { WrapPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { Search as SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as request from '~/apiServices';
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

        const getApi = async () => {
            try {
                setLoading(true);
                const result = await request.search(debounceValue);
                setResultsSearch(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        getApi();
    }, [debounceValue]);

    const handleClose = () => {
        setValueSearch('');
        setResultsSearch([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) return;
        setValueSearch(searchValue);
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
                    placeholder="Search accounts and videos"
                    className={cx('input')}
                    value={valueSearch}
                    spellCheck={false}
                    ref={inputRef}
                    onChange={handleChange}
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

                <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
