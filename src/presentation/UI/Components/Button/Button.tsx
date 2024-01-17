import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps ={
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    text?: string;
    name? : string;
    onClick: ()=> void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit'| 'reset';
    variant?: 'filled'| 'outlined';
};

const Button: React.FC<ButtonProps> =({
    icon,
    iconPosition = 'left',
    text,
    className,
    name,
    onClick,
    disabled,
    type,
    variant
})=> {
    return(
        <>
            <button
                name={name}
                className={twMerge(
                `flex-row text-center px-[1.75em] py-[0.75em] font-bold w-[150px]`,
                variant === 'filled'
                    ? 'bg-main-500 text-white'
                    : variant === 'outlined'
                    ? 'border-[1px] border-solid border-main-500 text-main-500'
                    : 'bg-green text-white',
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80',
                className,
                )}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {icon && iconPosition === 'left' && <span className={twMerge(!text ? '' : 'me-2')}>{icon}</span>}
                {text}
                {icon && iconPosition === 'right' && <span className={twMerge(!text ? '' : 'ms-2')}>{icon}</span>}
            </button>
        </>
    )
};
export default Button