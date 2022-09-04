import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountList.module.scss';

const cx = classNames.bind(styles);

function AccountList({ label, children }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('label')}>{label}</h4>
            {children}
            <span className={cx('more-btn')}>See all</span>
        </div>
    );
}

AccountList.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default AccountList;
