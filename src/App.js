import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("green");
  const newBtnColor = btnColor === "blue" ? "green" : "blue";
  const [inputDisabled, setInputDisabled] = useState(false);
  const [buttonStat, setButtonStat] = useState("Button is disabled");
  const newButtonStatus =
    buttonStat === "Button is enabled"
      ? "Button is disabled"
      : "Button is enabled";

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <p role="paragraph">{newButtonStatus}</p>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change button color to {newBtnColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked)}
        onClick={() => setButtonStat(newButtonStatus)}
      ></input>
    </div>
  );
}

export default App;
