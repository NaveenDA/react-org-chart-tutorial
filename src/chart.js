import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
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
                  src={chat}
                  alt="Chat"
                />
                <img
                  src={call}
                  alt="Call"
                />
                <img
                  src={video}
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
