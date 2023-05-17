
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function BoardImg () {
    const themeContext = useContext(ThemeContext)
    return(
        <svg width="20px" height="20px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M14 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6zM14 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z" stroke={themeContext.orange} strokeWidth="1.5"></path>
        </svg>
    )
}

export default BoardImg;
