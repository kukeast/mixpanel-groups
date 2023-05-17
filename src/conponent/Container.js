import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 720px;
    padding: 10px;
    margin: 80px auto;
    box-sizing: border-box;
`
function Container({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container;
