import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { WrapPopper } from '~/components/Popper';
import Header from './Header';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const [itemsMenu, setItemsMenu] = useState([{ data: items }]);
    // const [visible, setVisible] = useState(false);
    const current = itemsMenu[itemsMenu.length - 1];

    return (
        <Tippy
            // visible={visible}
            delay={[0, 700]}
            onHide={() => setItemsMenu([{ data: items }])}
            // animation="fade"
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapPopper>
                        {/* //header menu */}
                        {current.title ? (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setItemsMenu((prev) => prev.slice(0, itemsMenu.length - 1));
                                }}
                            />
                        ) : (
                            <></>
                        )}
                        {/*body menu */}
                        {current.data.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                onClick={() => {
                                    const hasChildren = !!item.children;
                                    console.log(item);
                                    if (hasChildren) {
                                        setItemsMenu((prev) => [...prev, item.children]);
                                    }
                                }}
                            />
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
