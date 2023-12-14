import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoSidebar.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const cx = classNames.bind(styles);

function VideoSidebar({ liked, message, share }) {
    const [isLiked, setIsLiked] = useState(false);

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        } else {
            return num.toString();
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('videoSidebar__btn')}>
                {isLiked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setIsLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={(e) => setIsLiked(true)} />
                )}
                <p>{isLiked ? formatNumber(liked + 1) : formatNumber(liked)}</p>
            </div>
            <div className={cx('videoSidebar__btn')}>
                <MessageIcon fontSize="large" />
                <p>{formatNumber(message)}</p>
            </div>
            <div className={cx('videoSidebar__btn')}>
                <ShareIcon fontSize="large" />
                <p>{formatNumber(share)}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;
