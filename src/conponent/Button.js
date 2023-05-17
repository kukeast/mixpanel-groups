import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    line-height: 1em;
    transition: 0.2s;
    color: ${({theme}) => theme.white};
    background-color: ${props => props.theme.primary};
    padding: 12px 16px;
    &:hover{
        background-color: ${props => darken( 0.05 , props.theme.primary)};
    }
    &:active{
        background-color: ${props => darken( 0.1 , props.theme.primary)};
    }
    ${props => props.disabled && css`
        pointer-events: none;
        opacity: 0.5;
    `};
`
function Button({ children, onClick, disabled }) {
    return (
        <Wrapper onClick={onClick} disabled={disabled}>
            {children}
        </Wrapper>
    )
}

export default Button;
