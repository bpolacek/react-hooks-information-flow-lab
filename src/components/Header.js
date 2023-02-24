import React from "react";

function Header({darkModeToggle, isDarkMode}){
    console.log(Header)

return(
    <header>
         <h2>Shopster</h2>
            <button onClick={darkModeToggle}>
               {isDarkMode ? "Dark" : "Light"} Mode
            </button>
    
    </header>
) 
}
export default Header;  