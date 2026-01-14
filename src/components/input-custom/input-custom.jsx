import styles from './input-custom.module.scss'
import classNames from 'classnames';

function InputCustom ({type, variant, active, placeholder, value, onChange, onKeyDown, inputRef, onBlure}) {

    const inputClasses = classNames(styles['input-custom'], 
        {[styles['adding-input']]: variant === 'adding-input'}, 
        {[styles['edited-input']]: variant === 'edited-input'},
        {[styles['edited-input-active']]: active === 'true'}
    )

    return (
        <input
        type={type}
        active={active}
        variant={variant}
        className={inputClasses}
        autoComplete='off'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
        onBlure={onBlure}
        ></input>
    )
}

export default InputCustom