import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './Button.module.scss'

const cx = classNames.bind(style);

function Button({ to, href, primary = false, outline = false,
    small = false, large = false, text = false, disabled = false, rounded =false,
    children,className,leftIcon,rightIcon, onClick, ...passProps }) {

    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        small,
        large,
        text,
    });

    const _props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        }
        )
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>);
}

export default Button;