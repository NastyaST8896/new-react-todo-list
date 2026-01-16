import style from './button-custom.module.scss';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';

type ButtonCustomProps = {
    variant: 'outlined' | 'contained';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function ButtonCustom(props: ButtonCustomProps) {
    const { variant, text, onClick } = props

    const buttonClasses = classNames(
        style['button'],
        { [style['outlined']]: variant === 'outlined' },
        { [style['contained']]: variant === 'contained' })
    return (
        <button className={buttonClasses} onClick={onClick}>{text}</button>
    )
}