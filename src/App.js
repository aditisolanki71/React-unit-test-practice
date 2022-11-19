import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor,setButtonColor] = useState("red");
  const [disabled,setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red"; 
  return (
    <div className="App">
      {/* Quiz-1 -->checkbox is checked then btn disable else btn is enable on unchecked */}
        <button 
          style={{backgroundColor: disabled ? 'gray' : buttonColor}}
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
        <label htmlFor="disable-button-checkbox">Disable button</label>
        {/* Quiz-2 disable button -> button is gray -> enable button -> button is red
        click btn to change color -> disable button --> button is gray
        enable button --> button is blue */}
     </div>
  );
}

export default App;
