import magnifyingGlassIcon from "../assets/magnifying-glass.svg";
import magnifyingGlassDarkModeIcon from "../assets/magnifying-glass-dark.svg";
import arrowDownIcon from "../assets/down-arrow.svg";
import arrowDownDarkModeIcon from "../assets/down-arrow-dark.svg";
import "../styles/searchFilterStyles/searchFilter.css";
import { useContext, useRef, useState } from "react";
import { darkModeContext } from "../App";
export function SearchFilter({ setQuery, setFilteredRegion }) {
   const { darkMode } = useContext(darkModeContext);
   const [filterBar, setFilterBar] = useState(false);
   const inputRef = useRef();
   const handleChange = (e) => {
      setQuery(e.target.value);
      setFilterBar(false);
   };
   const handleFilterBar = () => {
      setFilterBar(!filterBar);
   };
   const filterRegion = (e) => {
      setFilteredRegion(e.target.dataset.name);
      setQuery("");
      inputRef.current.value = "";
   };
   return (
      <section className={darkMode ? "search-filter dark" : "search-filter"}>
         <div className="search">
            {darkMode ? (
               <img src={magnifyingGlassDarkModeIcon} alt="magnifying glass dark mode icon" />
            ) : (
               <img src={magnifyingGlassIcon} alt="magnifying glass icon" />
            )}
            <input
               ref={inputRef}
               type="text"
               placeholder="Search for a country..."
               onChange={handleChange}
            />
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
            <div className={filterBar ? `regions active` : "regions"} onClick={filterRegion}>
               <p data-name="All">All</p>
               <p data-name="Africa">Africa</p>
               <p data-name="Americas">America</p>
               <p data-name="Asia">Asia</p>
               <p data-name="Europe">Europe</p>
               <p data-name="Oceania">Oceania</p>
            </div>
         </div>
      </section>
   );
}
