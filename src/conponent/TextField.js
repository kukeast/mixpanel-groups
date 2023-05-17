import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
    padding: 10px 12px;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    outline: none;
    color: ${({theme}) => theme.gray9};
    border: 1px solid ${({theme}) => theme.gray2};
    font-size: 14px;
    font-weight: 400;
    transition: 0.2s;
    border-radius: 4px;
    background-color: ${({theme}) => theme.layer};
    &::placeholder{
        color: ${({theme}) => theme.gray4};
    }
    &:hover{
        border: 1px solid ${({theme}) => theme.gray5};
        box-shadow: 0px 0px 0px 2px ${({theme}) => theme.gray2};
    }
    &:focus{
        border: 1px solid ${({theme}) => theme.primary};
        box-shadow: 0px 0px 0px 2px ${({theme}) => theme.primary1};
    }
`

function TextField({ defaultValue, maxLength, placeholder, name, type = 'text', callback }) {
    const [text, setText] = useState(defaultValue);
    const inputElem = useRef();
    const handleChange = () => {
        setText(inputElem.current.value)
        callback(name, inputElem.current.value)
    }
    useEffect(() => {
        setText(defaultValue)
    }, [defaultValue])
    return (
        <Wrapper
            type={type}
            maxLength={maxLength}
            onChange={handleChange}
            placeholder={placeholder}
            value={text}
            ref={inputElem}
        />
    )
}

export default TextField;
