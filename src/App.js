import "./App.css";
import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <Square colorValue={colorValue} />
      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue} />
    </>
  );
}

export default App;
