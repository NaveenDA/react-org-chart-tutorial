import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";

import data from "./data.json";

const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={faker.image.avatar()}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{faker.name.findName()}</h4>
                <p>{faker.name.jobTitle()}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/2950/2950657.svg"
                  alt="Chat"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1034/1034131.svg"
                  alt="Call"
                />
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/570/570387.svg"
                  alt="Video"
                />
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
