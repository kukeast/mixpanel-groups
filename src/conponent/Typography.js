import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-family: 'Outfit', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: ${props => props.size + 'px'};
    font-weight: ${props => props.weight};
    line-height: ${props => props.lineHeight + 'em'};
    color: ${props => props.theme[props.color]};
    margin: ${props => props.margin};
`
function Typography({ children, size, lineHeight, color, weight, margin, className }) {
    return (
        <Wrapper className={className} size={size} lineHeight={lineHeight} color={color} weight={weight} margin={margin}>
            {children}
        </Wrapper>
    )
}

export default Typography;
