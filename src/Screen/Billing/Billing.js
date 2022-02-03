import React from "react";
import calenderImg from "../../assets/calendar-edit.svg";
import Card_Design from "../../assets/card_Desigm.svg";
import "./Biling.css";
const Billing = () => {
  return (
    <div>
      <div className="Bling_date_piker_main_container">
        <div>
          <h1 className="common_header">Estimated Costs</h1>
        </div>
        <div className="date_piker_container">
          <img src={calenderImg} alt="calender" />
          <span className="from_date_span CF15">From Date :</span>
          <span className="date_span CF15">18/04/1999</span>
        </div>
        <div className="date_piker_container">
          <img src={calenderImg} alt="calender" />
          <span className="from_date_span CF15">From Date :</span>
          <span className="date_span CF15">18/04/1999</span>
        </div>
      </div>
      <div className="Billing_card">
        <img src={Card_Design} alt="Fansing" className="Card_Design_Top" />
        <img src={Card_Design} alt="Fansing" className="Card_Design_Bottom" />
        $35
      </div>
    </div>
  );
};

export default Billing;
