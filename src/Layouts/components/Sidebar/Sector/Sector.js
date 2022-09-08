import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Sector.module.scss';

const cx = classNames.bind(styles);

function Sector({ label, children, moreBtnText }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('label')}>{label}</h4>
            {children}
            {!!moreBtnText && <span className={cx('more-btn')}>{moreBtnText}</span>}
        </div>
    );
}

Sector.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    moreBtnText: PropTypes.string,
};
export default Sector;
