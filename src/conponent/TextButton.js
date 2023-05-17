import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    line-height: 1em;
    transition: 0.2s;
    color: ${({theme}) => theme.gray7};
    background-color: ${({theme}) => theme.white};
    padding: 12px 16px;
    &:hover{
        background-color: ${({theme}) => darken( 0.05 , theme.white)};
    }
    &:active{
        background-color: ${({theme}) => darken( 0.1 , theme.white)};
    }
`
function TextButton({ children, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}

export default TextButton;
