import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Webpage from "./Pages/Webpage";
import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Webpage />
      </DarkModeProvider>
    </div>
  );
}

export default App;
