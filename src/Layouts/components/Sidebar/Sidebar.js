import classNames from 'classnames/bind';

import { Home, Live, GroupUser, HomeActive, GroupUserActive, LiveActive, Tag, Music } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import Account from './Account';
import PreviewAccount from '~/components/Popper/PreviewAccount';
import Sector from './Sector';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const data = [
    {
        id: 112,
        first_name: 'Lý',
        last_name: 'Bính',
        full_name: 'Lý Bính',
        nickname: 'nhok20102003',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/112/63034bbec74d6.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: false,
        followings_count: 2,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-08-22 16:13:14',
        updated_at: '2022-08-22 16:26:23',
    },
    {
        id: 75,
        first_name: 'harry',
        last_name: 'marguire',
        full_name: 'harry marguire',
        nickname: 'bin',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/75/630267483ed7c.jpg',
        bio: 'Harry Maguire là một cầu thủ người Anh đang thi đấu ở vị trí trung vệ và là đội trưởng của câu lạc bộ Manchester United tại Premier League và đội tuyển quốc gia Anh.',
        tick: false,
        followings_count: 5,
        followers_count: 2,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-08-22 00:08:06',
        updated_at: '2022-08-22 00:11:36',
    },
    {
        id: 81,
        first_name: 'Lê',
        last_name: 'Hoà Bôn',
        full_name: 'Lê Hoà Bôn',
        nickname: 'hoabon',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/81/63026a8253d4f.jpg',
        bio: '✨ 2002✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: false,
        followings_count: 2,
        followers_count: 1,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-08-22 00:10:42',
        updated_at: '2022-08-22 00:25:22',
    },
    {
        id: 13,
        first_name: 'Sang',
        last_name: 'Biz',
        full_name: 'Sang Biz',
        nickname: 'sangreplit',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/13/630267176b15c.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 17,
        followers_count: 4,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-08-22 00:04:25',
        updated_at: '2022-08-22 00:10:47',
    },
    {
        id: 19,
        first_name: 'Bùi',
        last_name: 'Huy Hoàng',
        full_name: 'Bùi Huy Hoàng',
        nickname: 'hoangbuiggacc',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/19/6302670ab1402.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 2,
        followers_count: 4,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-08-22 00:04:43',
        updated_at: '2022-08-22 00:10:35',
    },
];

const data2 = [
    {
        tag: 'doilathe',
    },
    {
        tag: 'mackedoi',
    },
    {
        music: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        tag: '7749hieuung',
    },
    {
        music: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
    {
        music: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
];
function Sidebar() {
    const [suggestAccounts, setSuggestAccounts] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setSuggestAccounts(data);
        setTags(data2);
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<Home />} iconActive={<HomeActive />} title="For You" to={config.routes.home} />
                <MenuItem
                    icon={<GroupUser />}
                    iconActive={<GroupUserActive />}
                    title="Following "
                    to={config.routes.following}
                />
                <MenuItem icon={<Live />} iconActive={<LiveActive />} title="LIVE" to={config.routes.live} />
            </Menu>

            <Sector label={'Suggested accounts'} moreBtnText="See all">
                {suggestAccounts.map((acc) => (
                    <PreviewAccount key={acc.id} data={acc}>
                        <Account data={acc} />
                    </PreviewAccount>
                ))}
            </Sector>

            <Sector label={'Following accounts'} moreBtnText="See more">
                {suggestAccounts.map((acc) => (
                    <Account key={acc.id} data={acc} />
                ))}
            </Sector>

            <Sector label={'Discover'}>
                <div className={cx('wrap-list')}>
                    {tags.map((tag, index) => (
                        <Button
                            key={index}
                            className={cx('tag')}
                            to={'/'}
                            size="small"
                            rounded
                            LeftIcon={tag.tag ? Tag : Music}
                        >
                            {tag.tag ? tag.tag : tag.music}
                        </Button>
                    ))}
                </div>
            </Sector>

            <Sector>
                <div className={cx('wrap-list')}>
                    <div classNames={cx('container-link')}>
                        <Button text className={cx('link')}>
                            About
                        </Button>
                        <Button text className={cx('link')}>
                            TikTok Browser
                        </Button>
                        <Button text className={cx('link')}>
                            Newsroom
                        </Button>
                        <Button text className={cx('link')}>
                            Contact
                        </Button>
                        <Button text className={cx('link')}>
                            Careers
                        </Button>
                        <Button text className={cx('link')}>
                            ByteDance
                        </Button>
                    </div>
                </div>
            </Sector>
        </aside>
    );
}

export default Sidebar;
