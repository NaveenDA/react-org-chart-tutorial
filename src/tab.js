import React, { useEffect, useState } from "react";
import TabPane from "./tab-pane";

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabs">
      <ul className="tab-header">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div class="tab-child">{childContent[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });
    return error;
  }
};

export default Tabs;
