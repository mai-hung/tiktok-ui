import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ icon, iconActive, title, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('body', nav.isActive ? 'active' : '')}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('iconActive')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
