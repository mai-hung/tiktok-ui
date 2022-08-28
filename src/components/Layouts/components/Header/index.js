import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import {
    FaCircleNotch,
    FaEllipsisV,
    FaKeyboard,
    FaLanguage,
    FaPlus,
    FaQuestionCircle,
    FaRegTimesCircle,
    FaSistrix,
} from 'react-icons/fa';

import styles from './Header.module.scss';
import { images } from '~/assets';
import { MenuPopper, WrapPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

// fake data menu
const MENU_ITEMS = [
    {
        title: 'Language',
        icon: FaLanguage,
        // to:'/lang'
    },
    {
        title: 'Feedback and help',
        icon: FaQuestionCircle,
        to: '/following',
    },
    {
        title: 'Shortcuts',
        icon: FaKeyboard,
    },
];
const cx = classNames.bind(styles);

function Header() {
    // const [visible, setVisible] = useState(false);
    const [accounts, setAcounts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setAcounts([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt={'logo'} />
                </div>
                <Tippy
                    visible={accounts.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="Enter accounts and videos" className={cx('input')} spellCheck={false} />
                        <FaCircleNotch className={cx('icon')} />
                        <FaRegTimesCircle className={cx('icon')} />
                        <button className={cx('btn-search')}>
                            <FaSistrix />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('right-inner')}>
                    <Button outline to="./" className={cx('upload-btn')} LeftIcon={FaPlus}>
                        Upload
                    </Button>
                    <Button primary to="./">
                        Log in
                    </Button>
                    <MenuPopper items={MENU_ITEMS}>
                        <div className={cx('menu-icon')}>
                            <FaEllipsisV />
                        </div>
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
