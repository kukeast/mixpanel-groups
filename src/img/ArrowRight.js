
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function ArrowRightImg () {
    const themeContext = useContext(ThemeContext)
    return(
        <svg width="32px" height="32px" strokeWidth="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M9 6l6 6-6 6" stroke={themeContext.gray6} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}

export default ArrowRightImg;
