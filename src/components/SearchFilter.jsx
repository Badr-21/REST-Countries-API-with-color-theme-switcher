import magnifyingGlassIcon from "../assets/magnifying-glass.svg";
import magnifyingGlassDarkModeIcon from "../assets/magnifying-glass-dark.svg";
import arrowDownIcon from "../assets/down-arrow.svg";
import arrowDownDarkModeIcon from "../assets/down-arrow-dark.svg";
import "../styles/searchFilterStyles/searchFilter.css";
import { useContext, useState } from "react";
import { darkModeContext } from "../App";
export function SearchFilter() {
   const { darkMode } = useContext(darkModeContext);
   const [filterBar, setFilterBar] = useState(false);
   const handleFilterBar = () => {
      setFilterBar(!filterBar);
   };
   return (
      <section className={darkMode ? "search-filter dark" : "search-filter"}>
         <div className="search">
            {darkMode ? (
               <img src={magnifyingGlassDarkModeIcon} alt="magnifying glass dark mode icon" />
            ) : (
               <img src={magnifyingGlassIcon} alt="magnifying glass icon" />
            )}
            <input type="text" placeholder="Search for a country..." />
         </div>
         <div className="filter">
            <div className="by-region" onClick={handleFilterBar}>
               <p>Filter by region</p>
               {darkMode ? (
                  <img src={arrowDownDarkModeIcon} alt="arrow down dark mode icon" />
               ) : (
                  <img src={arrowDownIcon} alt="arrow down icon" />
               )}
            </div>
            <div className={filterBar ? `regions active` : "regions"}>
               <p>Africa</p>
               <p>America</p>
               <p>Asia</p>
               <p>Europe</p>
               <p>Oceania</p>
            </div>
         </div>
      </section>
   );
}
