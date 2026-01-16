import { ChangeEventHandler, KeyboardEventHandler, Ref, FocusEventHandler } from 'react';
import styles from './input-custom.module.scss';
import classNames from 'classnames';

type InputCustomProps = {
    variant: 'adding-input' | 'edited-input';
    active?: boolean;
    placeholder?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    onKeyDown: KeyboardEventHandler<HTMLInputElement> | undefined;
    inputRef: Ref<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
}

function InputCustom(props: InputCustomProps) {
    const { variant, active, placeholder, value, onChange, onKeyDown, inputRef, onBlur } = props


    const inputClasses = classNames(styles['input-custom'],
        { [styles['adding-input']]: variant === 'adding-input' },
        { [styles['edited-input']]: variant === 'edited-input' },
        { [styles['edited-input-active']]: active === true }
    )

    return (
        <input
            type='text'
            className={inputClasses}
            autoComplete='off'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={inputRef}
            onBlur={onBlur}
        ></input>
    )
}

export default InputCustom