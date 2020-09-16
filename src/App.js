import React from "react";
import "./styles.css";
import Chart from "./chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <span className="follow">
          <a href="https://twitter.com/naveenda_">
            <img
              alt="Follow @naveenda_"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
            Follow @naveenda_
          </a>
        </span>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
