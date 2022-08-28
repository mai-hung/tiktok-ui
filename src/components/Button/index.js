import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    text = false,
    rounded = false,
    outline = false,
    border = false,
    primary,
    separate = false,
    size,
    LeftIcon,
    RightIcon,
    disable = false,
    className,
    onClick,
    ...otherprops
}) {
    // console.log(others);

    let Comp = 'a';

    const props = {
        onClick,
        ...otherprops,
    };

    if (disable) {
        for (const key in props) {
            if (key.startsWith('on')) {
                delete props[key];
            }
        }
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classNames = {
        wrapper: 'wrapper',
        primary,
        text,
        [className]: 'cls',
        rounded,
        outline,
        disable,
        separate,
        [size]: size,
    };
    return (
        <Comp className={cx(classNames)} {...props}>
            {LeftIcon ? <LeftIcon className={cx('icon')} /> : <></>}
            <span className={cx('title')}>{children}</span>
            {RightIcon ? <RightIcon className={cx('icon')} /> : <></>}
        </Comp>
    );
}

export default Button;
