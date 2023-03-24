import { createContext, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nation } from "./components/Nation";

export const darkModeContext = createContext();
export const nationNameContext = createContext();
function App() {
   const [darkMode, setDarkMode] = useState(false);
   const [nationName, setNationName] = useState("");
   return (
      <Router>
         <div className="App">
            <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
               <Header />
               <nationNameContext.Provider value={{ nationName, setNationName }}>
                  <Routes>
                     <Route path="/" element={<Container />} />
                     <Route path="/:nationDetails" element={<Nation />} />
                  </Routes>
               </nationNameContext.Provider>
            </darkModeContext.Provider>
         </div>
      </Router>
   );
}

export default App;
