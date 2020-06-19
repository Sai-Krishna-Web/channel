import React, { Component } from "react";
import dayjs from "dayjs";

class ChannelCard extends Component {
  
  render() {
    const { item } = this.props;
    return (
      <div className="card-channel">
        <div className="content">
          <div className="">
            <img
              className="avatar"
              src={item.subjectPhotoUrl}
              alt="subject"
            ></img>
          </div>
          <div>
            <div className="title">{item.title}</div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        <div className="details">
        <div className="instructor">
          <img
            className="avatar"
            src={item.instructorPhotoUrl}
            alt="instructor"
          ></img>
          <span>{item.instructorName}</span>
        </div>
        <div className="time">
          <span>
            {dayjs(item.time).format("h:mm A")}-
            {dayjs(item.time).add(1, "h").format("h:mm A")} EDT
          </span>
        </div>
      
        </div>

      </div>
    );
  }
}

export default ChannelCard;
