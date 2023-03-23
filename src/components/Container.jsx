import { SearchFilter } from "./SearchFilter";
import "../styles/containerStyles/container.css";
import { useContext, useState } from "react";
import { darkModeContext } from "../App";
import { DisplayData } from "./DisplayData";

export function Container() {
   const { darkMode } = useContext(darkModeContext);
   const [query, setQuery] = useState("");
   const [filteredRegion, setFilteredRegion] = useState("All");

   return (
      <main className={darkMode ? "container dark" : "container"}>
         <SearchFilter setQuery={setQuery} setFilteredRegion={setFilteredRegion} />
         <DisplayData filteredRegion={filteredRegion} query={query} />
      </main>
   );
}
