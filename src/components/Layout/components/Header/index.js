import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {

    let currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa',

        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',

        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',

        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]



    return (
        <header className={cx('wrapper')} >
            <div className={cx('inner')} >
                <div className={cx('logo')} >
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]}
                                content='upload video'
                                placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]}
                                content='message'
                                placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]}
                                content='inbox'
                                placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>

                    ) : (
                        <>

                            <Button text >Upload</Button>
                            <Button primary>Login</Button>

                        </>

                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src='data:image/jpeg;base64,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'
                                className={cx('user-avatar')}
                                alt=''
                            />
                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>)
}

export default Header;