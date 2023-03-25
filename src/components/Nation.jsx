import { Link, useNavigate } from "react-router-dom";
import "../styles/nationDetailsStyles/nationDetails.css";
import arrowLeftIcon from "../assets/arrow-left.svg";
import arrowLeftDarkModeIcon from "../assets/arrow-left-dark.svg";
import { useContext, useEffect, useState } from "react";
import { darkModeContext, nationNameContext } from "../App";
import data from "../../data.json";

export function Nation() {
   const { darkMode } = useContext(darkModeContext);
   const { nationName, setNationName } = useContext(nationNameContext);
   const [nationDetails, setNationDetails] = useState();
   const [alpha3Code, setAlpha3Code] = useState("");

   const navigate = useNavigate();

   useEffect(() => {
      let nationClicked;
      if (nationName) {
         nationClicked = data.filter((nation) => {
            return nation.name === nationName;
         });
         setNationDetails(...nationClicked);
      }
   }, [nationName]);

   const handleBordersNation = (e) => {
      setAlpha3Code(e.target.textContent.trim());
   };

   useEffect(() => {
      let nationBordersClicked;
      if (alpha3Code) {
         nationBordersClicked = data.filter((nation) => {
            return nation.alpha3Code === alpha3Code;
         });
         setNationDetails(...nationBordersClicked);
      }
   }, [alpha3Code]);

   return (
      <section className={darkMode ? "nations-details dark" : "nations-details"}>
         <Link to="/" className="back" style={{ textDecoration: "none" }}>
            <img src={darkMode ? arrowLeftDarkModeIcon : arrowLeftIcon} alt="arrow left icon" />
            <p>Back</p>
         </Link>
         {nationDetails ? (
            <article className="nation-details">
               <img src={nationDetails.flags.svg} alt={`${nationDetails.name} flag`} />
               <div className="nation-infos">
                  <h2>{nationDetails.name}</h2>
                  <div className="nation-infos-text">
                     <div className="nation-infos-text-one">
                        <p>
                           Native Name: <span>{nationDetails.nativeName}</span>
                        </p>
                        <p>
                           Population: <span>{`${nationDetails.population.toLocaleString()}`}</span>
                        </p>
                        <p>
                           Region: <span>{nationDetails.region}</span>
                        </p>
                        <p>
                           Sub Region: <span>{nationDetails.subregion}</span>
                        </p>
                        <p>
                           Capital: <span>{nationDetails.capital}</span>
                        </p>
                     </div>
                     <div className="nation-infos-text-two">
                        <p>
                           Top Level Domain: <span>{nationDetails.topLevelDomain}</span>
                        </p>
                        <p>
                           Currencies: <span>{nationDetails.currencies[0].code}</span>
                        </p>
                        <p>
                           Languages:
                           <span>
                              {" " + nationDetails.languages.map((language) => " " + language.name)}
                           </span>
                        </p>
                     </div>
                  </div>
                  <div className="nation-borders">
                     {nationDetails.borders ? (
                        <div>
                           Border Countries:
                           {nationDetails.borders.map((country) => {
                              return (
                                 <Link
                                    key={country}
                                    to={`/${country}`}
                                    style={{ textDecoration: "none" }}
                                 >
                                    <div onClick={handleBordersNation}> {country} </div>
                                 </Link>
                              );
                           })}
                        </div>
                     ) : null}
                  </div>
               </div>
            </article>
         ) : (
            "Searching..."
         )}
      </section>
   );
}
