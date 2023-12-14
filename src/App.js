import classNames from 'classnames/bind';
import styles from './App.css';
import Video from './Component/Video';
import { VideoLink } from '~/Component/Data';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <div className={cx('app__videos')}>
                {VideoLink.map((item) => {
                    return (
                        <Video
                            key={item.id}
                            url={item.url}
                            song={item.song}
                            desc={item.desc}
                            liked={item.liked}
                            message={item.message}
                            share={item.share}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
