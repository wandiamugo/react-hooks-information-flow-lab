import React from "react";

function darkMode({isDarkMode, onDarkModeClick}) {
    return ( 
        <header>
            <button onClick={onDarkModeClick}>{isDarkMode? "Dark" : "Light"} Mode</button>
        </header>
    )
}

export default darkMode;