import VideoBox from '~/components/VideoBox';

const videoItem = {
    image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6bb9da138c4cd0f92ca9868fef6556aa~c5_100x100.jpeg?x-expires=1662886800&x-signature=gMY6LfzkQmmPnj2130p%2BT%2F9riZ0%3D',
    nickname: 'samsunglovers11',
    tick: false,
    name: 'những người yêu thích samsung',
};
function Home() {
    return <VideoBox {...videoItem} />;
}

export default Home;
