import React from 'react';
import classNames from 'classnames/bind';
import styles from './VideoFooter.module.scss';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function VideoFooter({ song, desc }) {
    return (
        <>
            <div className={cx('videoFooter')}>
                <div className={cx('videoFooter__text')}>
                    <h3>@huylewb</h3>
                    <p>{desc}</p>
                    <div className={cx('videoFooter__ticker')}>
                        <MusicNoteIcon />
                        <p>{song}</p>
                    </div>
                </div>
                <img
                    className={cx('videoFooter__record')}
                    src="https://static.thenounproject.com/png/934821-200.png"
                    alt=""
                />
            </div>
            <div className={cx('videoFooter__tab-content')}>
                <div>
                    <footer className={cx('videoFooter__tab-content-wrapper')}>
                        <div className={cx('videoFooter__hometab-main-wrapper')}>
                            <a href="/" className={cx('styled-footer-items-link')}>
                                <svg
                                    width="32px"
                                    height="32px"
                                    viewBox="0 0 48 48"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
                                    />
                                </svg>
                                <div className={cx('videoFooter__hometab-main')}>Trang chủ</div>
                            </a>
                        </div>
                        <div className={cx('videoFooter__hometab-main-wrapper')}>
                            <a href="/" className={cx('styled-footer-items-link')}>
                                <svg
                                    width="32px"
                                    height="32px"
                                    viewBox="0 0 36 36"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 28.0547C23.553 28.0547 28.0547 23.5531 28.0547 18C28.0547 12.4469 23.553 7.94531 18 7.94531C12.4469 7.94531 7.94531 12.4469 7.94531 18C7.94531 23.5531 12.4469 28.0547 18 28.0547ZM30.375 18C30.375 24.8345 24.8345 30.375 18 30.375C11.1655 30.375 5.625 24.8345 5.625 18C5.625 11.1655 11.1655 5.625 18 5.625C24.8345 5.625 30.375 11.1655 30.375 18Z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M20.3508 20.3864C20.712 20.1679 20.9645 19.8074 21.0462 19.3932L22.427 12.3948C22.5027 12.0113 22.0871 11.7204 21.7527 11.9226L15.6486 15.6137C15.2874 15.8322 15.0349 16.1928 14.9532 16.6069L13.5724 23.6053C13.4967 23.9888 13.9123 24.2797 14.2467 24.0775L20.3508 20.3864ZM16.5684 20.0442L18.9029 18.6325L19.431 15.9559L17.0965 17.3676L16.5684 20.0442Z"
                                    />
                                </svg>
                                <div className={cx('videoFooter__hometab-main')}>Khám phá</div>
                            </a>
                        </div>
                        <div className={cx('matrix-smart-wrapper')}>
                            <div className={cx('open-tiktok-icon')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 75 49"
                                    width="100%"
                                    height="100%"
                                >
                                    <path
                                        fill="#D8D8D8"
                                        stroke="#979797"
                                        strokeWidth={0.5}
                                        d="M.25.25h74.5v48.5H.25z"
                                        opacity={0.01}
                                    />
                                    <path
                                        fill="#FA2D6C"
                                        fillRule="evenodd"
                                        d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#20D5EC"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z"
                                    />
                                    <rect
                                        width={36}
                                        height={28}
                                        x="19.5"
                                        y="10.5"
                                        fill="#fff"
                                        rx="8"
                                    />
                                    <path
                                        fill="#161823"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M36.5 18.25a.5.5 0 00-.5.5v4.75h-4.75a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5H36v4.75a.5.5 0 00.5.5H38a.5.5 0 00.5-.5V26h4.75a.5.5 0 00.5-.5V24a.5.5 0 00-.5-.5H38.5v-4.75a.5.5 0 00-.5-.5h-1.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={cx('videoFooter__hometab-main-wrapper')}>
                            <a href="/" className={cx('styled-footer-items-link')}>
                                <svg
                                    width="32px"
                                    height="32px"
                                    viewBox="0 0 32 32"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                    />
                                </svg>
                                <div className={cx('videoFooter__hometab-main')}>Hộp thư</div>
                            </a>
                        </div>
                        <div className={cx('videoFooter__hometab-main-wrapper')}>
                            <a href="/" className={cx('styled-footer-items-link')}>
                                <svg
                                    width="32px"
                                    height="32px"
                                    viewBox="0 0 48 48"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M24.0001 11.5C20.9625 11.5 18.5001 13.9624 18.5001 17C18.5001 20.0376 20.9625 22.5 24.0001 22.5C27.0377 22.5 29.5001 20.0376 29.5001 17C29.5001 13.9624 27.0377 11.5 24.0001 11.5ZM15.5001 17C15.5001 12.3056 19.3057 8.5 24.0001 8.5C28.6945 8.5 32.5001 12.3056 32.5001 17C32.5001 21.6944 28.6945 25.5 24.0001 25.5C19.3057 25.5 15.5001 21.6944 15.5001 17ZM24.0001 30.5C19.1458 30.5 15.0586 33.7954 13.8578 38.2712C13.7147 38.8046 13.2038 39.1741 12.6591 39.0827L11.6729 38.9173C11.1282 38.8259 10.7571 38.3085 10.8888 37.7722C12.3362 31.8748 17.6559 27.5 24.0001 27.5C30.3443 27.5 35.664 31.8748 37.1114 37.7722C37.2431 38.3085 36.872 38.8259 36.3273 38.9173L35.3411 39.0827C34.7964 39.1741 34.2855 38.8046 34.1424 38.2712C32.9416 33.7954 28.8544 30.5 24.0001 30.5Z"
                                    />
                                </svg>
                                <div className={cx('videoFooter__hometab-main')}>Hồ sơ</div>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default VideoFooter;
