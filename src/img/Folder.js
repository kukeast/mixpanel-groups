
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function FolderImg () {
    const themeContext = useContext(ThemeContext)
    return(
        <svg width="32px" height="32px" strokeWidth="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M2 11V4.6a.6.6 0 01.6-.6h6.178a.6.6 0 01.39.144l3.164 2.712a.6.6 0 00.39.144H21.4a.6.6 0 01.6.6V11M2 11v8.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V11M2 11h20" stroke={themeContext.primary} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}

export default FolderImg;
