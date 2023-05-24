import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("");
      }
    } else if (value === "AC") {
      setResult("");
    } else if (value === "PER") {
      setResult((result / result) * 100);
    } else if (value === "DEL") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calc-section">
        <div className="input-box">
          <input
            type="text"
            value={result}
            className="calculator-screen"
            disabled
          />
        </div>
        <div>
          <table className="calculator-buttons">
            <tr>
              <td>
                <button
                  className="calculator-button white"
                  onClick={() => handleClick("AC")}
                >
                  AC
                </button>
                <button
                  className="calculator-button white"
                  onClick={() => handleClick("PER")}
                >
                  %
                </button>
                <button
                  className="calculator-button white"
                  onClick={() => handleClick("/")}
                >
                  <i className="fa-solid fa-divide"></i>
                </button>
                <button
                  className="calculator-button orange"
                  onClick={() => handleClick("DEL")}
                >
                  <i className="fa-solid fa-delete-left"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("7")}
                >
                  7
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("8")}
                >
                  8
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("9")}
                >
                  9
                </button>
                <button
                  className="calculator-button orange"
                  onClick={() => handleClick("*")}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("4")}
                >
                  4
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("5")}
                >
                  5
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("6")}
                >
                  6
                </button>
                <button
                  className="calculator-button orange"
                  onClick={() => handleClick("-")}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("1")}
                >
                  1
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("2")}
                >
                  2
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick("3")}
                >
                  3
                </button>
                <button
                  className="calculator-button orange"
                  onClick={() => handleClick("+")}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculator-button extra-width black"
                  onClick={() => handleClick("0")}
                >
                  0
                </button>
                <button
                  className="calculator-button black"
                  onClick={() => handleClick(".")}
                >
                  .
                </button>
                <button
                  className="calculator-button orange"
                  onClick={() => handleClick("=")}
                >
                  =
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <p className="dev">Made by Shubham kumar</p>
    </div>
  );
};

export default App;
