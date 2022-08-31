import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FaChevronLeft } from 'react-icons/fa';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <div className={cx('back-btn')} onClick={onBack}>
                <FaChevronLeft />
            </div>
            <div className={cx('header-title')}>{title}</div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default Header;
