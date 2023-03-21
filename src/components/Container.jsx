import { SearchFilter } from "./SearchFilter";
import "../styles/containerStyles/container.css";
import { useContext } from "react";
import { darkModeContext } from "../App";
import { DisplayData } from "./DisplayData";

export function Container() {
   const { darkMode } = useContext(darkModeContext);
   return (
      <main className={darkMode ? "container dark" : "container"}>
         <SearchFilter />
         <DisplayData />
      </main>
   );
}
