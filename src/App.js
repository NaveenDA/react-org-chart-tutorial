import React from "react";
import "./styles.css";
import Tabs from "./tab";
import TabPane from "./tab-pane";

export default function App() {
  return (
    <div className="App">
      <div className="header">React Employee Hierarchy Chart</div>
      <div className="container">
        <Tabs>
          <TabPane name="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane name="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane name="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <footer>
        <a href="https://twitter.com/_naveenda">
          <img
            alt="Follow @naveenda_"
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          />
          Follow @naveenda_
        </a>
      </footer>
    </div>
  );
}
