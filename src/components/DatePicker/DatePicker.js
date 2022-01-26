import React from "react";
import calenderImg from "../../assets/calendar-edit.svg";
import "./index.css";

const datePicker = () => {
  return (
    <div className="top_container_selection">
      <div>
        <select className="common-select">
          {[0, 2, 3, 4].map((val) => {
            return <option key={val}>All Boats</option>;
          })}
        </select>
        <select className="common-select">
          {[0, 2, 3, 4].map((val) => {
            return <option key={val}>Select Team</option>;
          })}
        </select>
      </div>
      <div className="date_piker_main_container">
        <div className="date_piker_container">
          <img src={calenderImg} alt="calender" />
          <span className="from_date_span">From Date :</span>
          <span className="date_span">18/04/1999</span>
        </div>
        <div className="date_piker_container">
          <img src={calenderImg} alt="calender" />
          <span className="from_date_span">From Date :</span>
          <span className="date_span">18/04/1999</span>
        </div>
      </div>
    </div>
  );
};

export default datePicker;
