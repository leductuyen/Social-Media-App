import React, { useRef } from 'react'

const Input = ({ className, ...rest }) => {
    const inputRef = useRef(null)

    return <input className={className} type="text" ref={inputRef} {...rest} />
}

export default Input
