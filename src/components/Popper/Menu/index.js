import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { WrapPopper } from '~/components/Popper';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    return (
        <Tippy
            // visible
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapPopper>
                        {items.map((item, index) => (
                            <Button key={index} LeftIcon={item.icon} to={item.to} className={cx('menu-item')}>
                                {item.title}
                            </Button>
                        ))}
                    </WrapPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
