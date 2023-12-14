import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoFooter from '~/Component/VideoFooter';
import VideoSidebar from '../VideoSidebar';

const cx = classNames.bind(styles);

function Video({ url, song, desc, liked, message, share }) {
    const videoRefs = useRef();
    const [playing, setPlaying] = useState(false);

    const onVideoPress = () => {
        if (playing) {
            videoRefs.current.pause();
            setPlaying(!playing);
        } else {
            videoRefs.current.play();
            setPlaying(!playing);
        }
    };

    return (
        <>
            <div className={cx('video')}>
                <video
                    className={cx('video__player')}
                    loop
                    onClick={() => onVideoPress()}
                    ref={videoRefs}
                    src={url}
                ></video>
                <VideoFooter song={song} desc={desc} />
                <VideoSidebar liked={liked} message={message} share={share} />
            </div>
        </>
    );
}

export default Video;
