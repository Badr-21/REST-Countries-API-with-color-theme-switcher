import { useEffect, useState, useContext } from "react";
import data from "../../data.json";
import "../styles/displayDataStyles/displayData.css";
import { darkModeContext } from "../App";
export function DisplayData() {
   const { darkMode } = useContext(darkModeContext);
   const [dataDisplay, setDataDisplay] = useState();
   useEffect(() => {
      setDataDisplay(data);
      console.log(data);
   }, []);
   return (
      <section className={darkMode ? "display-data dark" : "display-data"}>
         {dataDisplay
            ? dataDisplay.map((nation) => {
                 return (
                    <div key={nation.numericCode} className="nation">
                       <img src={nation.flags.png} alt={`${nation.name} flag`} />
                       <div className="nation-info">
                          <h2 className="nation-name">{nation.name}</h2>
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
            : "Searching"}
      </section>
   );
}
