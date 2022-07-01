import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import style from './AccountItem.module.scss'

const cx = classNames.bind(style);

function AccountItem() {
    return ( <div className={cx('wrapper')}>
        <img className={cx('avatar')} src = '' alt="Name" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>N.V.A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>N.V.A </span>
        </div>
    </div> );
}

export default AccountItem;