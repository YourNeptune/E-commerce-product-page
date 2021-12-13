import { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  const [number, setNumber] = useState(0);

  const getProductNumber = (number) => {
    setNumber(number);
  };
  return (
    <div className="App">
      <NavBar number={number} getProductNumber={getProductNumber} />
      <MainContent func={getProductNumber} />
    </div>
  );
}

export default App;
