import classNames from 'classnames/bind';
import { Home, Live, GroupUser, HomeActive, GroupUserActive, LiveActive } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<Home />} iconActive={<HomeActive />} title="Home" to={config.routes.home} />
                <MenuItem
                    icon={<GroupUser />}
                    iconActive={<GroupUserActive />}
                    title="Following "
                    to={config.routes.following}
                />
                <MenuItem icon={<Live />} iconActive={<LiveActive />} title="Home" to={config.routes.live} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
