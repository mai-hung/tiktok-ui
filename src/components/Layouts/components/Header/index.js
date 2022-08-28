import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import {
    FaCircleNotch,
    FaCog,
    FaCoins,
    FaEllipsisV,
    FaKeyboard,
    FaLanguage,
    FaPlus,
    FaQuestionCircle,
    FaRegCommentDots,
    FaRegPaperPlane,
    FaRegTimesCircle,
    FaSignOutAlt,
    FaSistrix,
    FaUser,
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
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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

const LOGGED_ITEMS = [
    {
        title: 'View profile',
        icon: FaUser,
        to: '/profile',
    },
    {
        title: 'Get Coins',
        icon: FaCoins,
        to: '/coins',
    },
    {
        title: 'Settings',
        icon: FaCog,
        to: '/following',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: FaSignOutAlt,
        separate: true,
    },
];
function Header() {
    const currentUser = true;

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
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('right-inner')}>
                    <Button outline to="./" className={cx('upload-btn')} LeftIcon={FaPlus}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <div className={cx('btn-left-user', 'message')}>
                                    <FaRegPaperPlane />
                                </div>
                            </Tippy>
                            <Tippy content="Inbox">
                                <div className={cx('btn-left-user', 'inbox')}>
                                    <FaRegCommentDots />
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary to="./">
                                Log in
                            </Button>
                        </>
                    )}
                    <MenuPopper items={currentUser ? LOGGED_ITEMS : MENU_ITEMS}>
                        {currentUser ? (
                            <div className={cx('user-image')}>
                                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1661868000&x-signature=F2bJVZ%2BY0cLKpzBJIQY8LJ1THug%3D" />
                            </div>
                        ) : (
                            <div className={cx('menu-icon')}>
                                <FaEllipsisV />
                            </div>
                        )}
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
