import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Preview.module.scss';
import { WrapPopper } from '~/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const renderPreview = (data) => (
    <div className={cx('body')}>
        <header className={cx('header')}>
            <Link to={`/@${data.nickname}`} className={cx('avatar')}>
                <Image src={data.avatar} alt={data.nickname} />
            </Link>
            <Button primary className={cx('flw-btn')}>
                Follow
            </Button>
        </header>
        <Link to={`/@${data.nickname}`}>
            <h4 className={cx('title')}>
                <span>{data.nickname}</span>
                {!!data.tick && <FaCheckCircle className={cx('check')} />}
            </h4>
            <p className={cx('description')}>{data.full_name}</p>
        </Link>
        <div className={cx('content')}>
            <h4 className={cx('number')}>
                <span>{data.followers_count}</span> Followers
            </h4>
            <h4 className={cx('number')}>
                <span>{data.likes_count}</span> Likes
            </h4>
        </div>
    </div>
);

function PreviewAccount({ children, data }) {
    return (
        <div>
            <HeadlessTippy
                delay={[500, 0]}
                offset={[-20, 0]}
                placement="bottom-start"
                interactive={true}
                render={(attrs) => (
                    <div className={cx('container')} tabIndex="-1" {...attrs}>
                        <WrapPopper>{renderPreview(data)}</WrapPopper>
                    </div>
                )}
            >
                <div>{children}</div>
            </HeadlessTippy>
        </div>
    );
}

PreviewAccount.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};
export default PreviewAccount;
