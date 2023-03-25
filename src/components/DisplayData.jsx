import { useEffect, useState, useContext } from "react";
import data from "../../data.json";
import "../styles/displayDataStyles/displayData.css";
import { darkModeContext, nationNameContext } from "../App";
import { Link } from "react-router-dom";
export function DisplayData({ query, filteredRegion }) {
   const { darkMode } = useContext(darkModeContext);
   const [dataDisplay, setDataDisplay] = useState();
   const { setNationName } = useContext(nationNameContext);

   const handleNationName = (e) => {
      setNationName(e.target.textContent);
   };

   useEffect(() => {
      let searchedNations;
      let filteredNations;
      if (filteredRegion === "All") {
         if (!query) {
            setDataDisplay(data);
         } else {
            searchedNations = data.filter((nation) => {
               return nation.name.toLowerCase().includes(query.toLowerCase());
            });
            setDataDisplay(searchedNations);
         }
      } else {
         if (!query) {
            filteredNations = data.filter((nation) => {
               return nation.region === filteredRegion;
            });
            setDataDisplay(filteredNations);
         } else {
            filteredNations = data.filter((nation) => {
               return (
                  nation.region === filteredRegion &&
                  nation.name.toLowerCase().includes(query.toLowerCase())
               );
            });
            setDataDisplay(filteredNations);
         }
      }
   }, [query, filteredRegion]);

   return (
      <section className={darkMode ? "display-data dark" : "display-data"}>
         {dataDisplay
            ? dataDisplay.map((nation) => {
                 return (
                    <div key={nation.numericCode} className="nation">
                       <img src={nation.flags.png} alt={`${nation.name} flag`} />
                       <div className="nation-info">
                          <Link to={`/${nation.alpha3Code}`} style={{ textDecoration: "none" }}>
                             <h3 className="nation-name" onClick={handleNationName}>
                                {nation.name}
                             </h3>
                          </Link>
                          <p className="nation-population">
                             Population: <span>{`${nation.population.toLocaleString()}`}</span>
                          </p>
                          <p className="nation-region">
                             Region: <span>{`${nation.region}`}</span>
                          </p>
                          <p className="nation-capital">
                             Capital: <span>{`${nation.capital}`}</span>
                          </p>
                       </div>
                    </div>
                 );
              })
            : "Searching..."}
      </section>
   );
}
