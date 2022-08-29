import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import {
    FaCog,
    FaCoins,
    FaEllipsisV,
    FaKeyboard,
    FaLanguage,
    FaQuestionCircle,
    FaSignOutAlt,
    FaUser,
} from 'react-icons/fa';

import styles from './Header.module.scss';
import { images } from '~/assets';
import { MenuPopper } from '~/components/Popper';
import Button from '~/components/Button';
import { Inbox, Messages, Upload as UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt={'logo'} />
                </div>
                {/* search */}
                <Search />
                <div className={cx('right-inner')}>
                    <Button outline to="./" className={cx('upload-btn')} LeftIcon={UploadIcon}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <div className={cx('btn-left-user', 'message')}>
                                    <Messages />
                                </div>
                            </Tippy>
                            <Tippy content="Inbox">
                                <div className={cx('btn-left-user', 'inbox')}>
                                    <Inbox />
                                    <span className={cx('number-notify')}>69</span>
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
                                <Image
                                    alt="user"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1661868000&x-signature=F2bJVZ%2BY0cLKpzBJIQY8LJ1THug%3D"
                                />
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
