import { createContext, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

export const darkModeContext = createContext();
function App() {
   const [darkMode, setDarkMode] = useState(false);
   return (
      <div className="App">
         <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Header />
            <Container />
         </darkModeContext.Provider>
      </div>
   );
}

export default App;
