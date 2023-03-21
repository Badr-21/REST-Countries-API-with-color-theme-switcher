import crescentMoonIcon from "../assets/crescent-moon.svg";
import crescentMoonDarkModeIcon from "../assets/crescent-moon-dark.svg";
import "../styles/headerStyles/header.css";
import { useContext } from "react";
import { darkModeContext } from "../App";

export function Header() {
   const { darkMode, setDarkMode } = useContext(darkModeContext);
   const handleDarkMode = () => {
      setDarkMode(!darkMode);
   };
   return (
      <header className={darkMode ? `header dark` : "header"}>
         <h1>Where in the world?</h1>
         <div className="dark-mode" onClick={handleDarkMode}>
            {darkMode ? (
               <img src={crescentMoonDarkModeIcon} alt="crescent moon dark mode icon" />
            ) : (
               <img src={crescentMoonIcon} alt="crescent moon icon" />
            )}
            <p>Dark Mode</p>
         </div>
      </header>
   );
}
