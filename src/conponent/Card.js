import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.layer};
    border: 1px solid ${({theme}) => theme.gray2};
    padding: 20px;
    box-shadow: 0px 4px 8px 0px #0000000D;
    transition: 0.3s;
    ${props => props.onClick && css`
        &:hover{
            box-shadow: 0px 4px 12px 0px #0000001A;
        }
        cursor: pointer;
    `}
`

function Card({ className, children, onClick }) {
    return(
        <Wrapper className={className} onClick={onClick}>
            {children}
        </Wrapper>
    );
}

export default Card;
