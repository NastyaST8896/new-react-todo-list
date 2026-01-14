import style from './button-custom.module.scss'
import classNames from 'classnames';

export function ButtonCustom ({variant, text, onClick}) {

    const buttonClasses = classNames(style['button'],{[style['outlined']]: variant === 'outlined'}, {[style['contained']]: variant === 'contained'})
    return(
        <button className={buttonClasses} variant={variant} onClick={onClick}>{text}</button>
    )
}