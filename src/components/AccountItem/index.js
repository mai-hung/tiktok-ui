import { FaCheckCircle } from 'react-icons/fa';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

/* eslint-disable jsx-a11y/alt-text */

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img
                    alt="ava"
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1661587200&x-signature=%2FVdAUH0EqX%2BCxJTyVasvevQdTL8%3D"
                />
            </div>
            <div className={cx('body')}>
                <h4 className={cx('title')}>
                    <span>vtv24.cab</span>
                    <FaCheckCircle className={cx('check')} />
                </h4>
                <p className={cx('description')}>vtv cab</p>
            </div>
        </div>
    );
}

export default AccountItem;
