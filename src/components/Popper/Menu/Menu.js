import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { WrapPopper } from '~/components/Popper';
import Header from './Header';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items, hideOnClick = false }) {
    const [itemsMenu, setItemsMenu] = useState([{ data: items }]);

    const current = itemsMenu[itemsMenu.length - 1];
    const renderItem = () =>
        current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        const hasChildren = !!item.children;
                        if (hasChildren) {
                            setItemsMenu((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });

    const handleReset = () => setItemsMenu([{ data: items }]);

    const handleBack = () => {
        setItemsMenu((prev) => prev.slice(0, itemsMenu.length - 1));
    };
    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[18, 6]}
            onHide={handleReset}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapPopper>
                        {/* //header menu */}
                        {current.title ? <Header title={current.title} onBack={handleBack} /> : <></>}
                        {/*body menu */}
                        <div className={cx('scrollable')}>{renderItem()}</div>
                    </WrapPopper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
};
export default Menu;
