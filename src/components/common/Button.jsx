import React from 'react'
import './scss/Button.scss'

const Button = ({ children, className, variant, onClick, ...restProps }) => {
    let buttonClass = 'button'

    switch (variant) {
        case 'primary':
            buttonClass += ' button--primary'
            break

        case 'secondary':
            buttonClass += ' button--secondary'
            break

        case 'danger':
            buttonClass += ' button--danger'
            break

        default:
            buttonClass += ' button--default'
            break
    }

    buttonClass += ` ${className}`

    return (
        <button className={buttonClass} {...restProps} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
