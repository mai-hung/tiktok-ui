import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button
            LeftIcon={item.icon}
            // href=
            to={item.to}
            onClick={onClick}
            separate={item.separate}
            className={cx('menu-item', 'important')}
        >
            {item.title}
        </Button>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
