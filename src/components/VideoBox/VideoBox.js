// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoBox.module.scss';
import Image from '../Image';
import Button from '../Button';
import { FaCircleNotch } from 'react-icons/fa';

const cx = classNames.bind(styles);

function VideoBox({ image, name, nickname, tick }) {
    return (
        <div className={cx('wrapper')}>
            <Image src={image} alt={nickname} className={cx('avatar')} />
            <div className={cx('body')}>
                <div className={cx('heading')}>
                    <Button className={cx('nickname', 'btn')} text to="/">
                        {nickname}
                    </Button>
                    {!!tick && <FaCircleNotch className={cx('tick')} />}
                    <span className={cx('name')}>{name}</span>
                    <div className={cx('description')}>
                        <Button text to="/" className={cx('btn')}>
                            @jashjd
                        </Button>
                    </div>
                </div>
                <Button outline className={cx('flw-btn', 'btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

VideoBox.propTypes = {};

export default VideoBox;
