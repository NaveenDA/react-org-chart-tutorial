import React from "react";
import "./styles.css";
import Chart from "./chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <span className="follow">
          <a href="https://twitter.com/salimdinesh12">
            <img
              alt="Follow @dineshkarthi12"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
            Follow @dineshkarthi12
          </a>
        </span>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
