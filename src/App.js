import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor,setButtonColor] = useState("red");
  const [disabled,setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red"; 
  return (
    <div className="App">
        <button 
          style={{backgroundColor: buttonColor}}
          disabled={disabled}
          onClick={() => setButtonColor(newButtonColor)}
         > 
            Change to {newButtonColor}
        </button>
        <input 
            id="disable-button-checkbox"
            type="checkbox"
            defaultChecked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
        />
    </div>
  );
}

export default App;
