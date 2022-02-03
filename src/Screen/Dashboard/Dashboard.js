import React from "react";
import "./Dashboard.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import Card_arrow_img from "../../assets/arrow_card.svg";
import feedback from "../../assets/feedback.svg";
const index = () => {
  return (
    <div className="dashboard_container">
      <DatePicker />
      <div className="first_card_containers">
        <h1 className="common_header">Summary</h1>
        <div className="top_card_parent_container">
          <div className="top_card_container pink_card">
            <div className="card_content_container">
              <span className="CF18">Total Chat</span>
              <h1>10k</h1>
            </div>
            <div className="card_round_icon">
              <img src={Card_arrow_img} alt="arrow" />
            </div>
          </div>
          <div className="top_card_container green_card">
            <div className="card_content_container">
              <span className="CF18">Total Chat</span>
              <h1>10k</h1>
            </div>
            <div className="card_round_icon">
              <img src={Card_arrow_img} alt="arrow" />
            </div>
          </div>
          <div className="top_card_container yellow_card">
            <div className="card_content_container">
              <span className="CF18">Total Chat</span>
              <h1>10k</h1>
            </div>
            <div className="card_round_icon">
              <img src={feedback} alt="arrow" />
            </div>
          </div>
          <div className="top_card_container blue_card">
            <div className="card_content_container">
              <span className="CF18">Total Chat</span>
              <h1>10k</h1>
            </div>
            <div className="card_round_icon">
              <img src={feedback} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="common_header">User</h1>
      <div className="chart_main_container">
        <div className="chart_container"></div>
        <div className="chart_container"></div>
      </div>
      <h1 className="common_header">Support</h1>
      <div className="support_container">
        <div className="sup_card_container">
          <div className="sup_card_round_icon pink_round">
            <img src={Card_arrow_img} alt="arrow" />
          </div>
          <div className="sup_content_container CF18">
            <span>FRSC</span>
            <h1>41%</h1>
          </div>
        </div>
        <div className="sup_card_container">
          <div className="sup_card_round_icon green_round">
            <img src={Card_arrow_img} alt="arrow" />
          </div>
          <div className="sup_content_container CF18">
            <span>FRSC</span>
            <h1>41%</h1>
          </div>
        </div>
        <div className="sup_card_container">
          <div className="sup_card_round_icon yellow_round">
            <img src={feedback} alt="arrow" />
          </div>
          <div className="sup_content_container CF18">
            <span>FRSC</span>
            <h1>41%</h1>
          </div>
        </div>
        <div className="sup_card_container">
          <div className="sup_card_round_icon red_round">
            <img src={feedback} alt="arrow" />
          </div>
          <div className="sup_content_container CF18">
            <span>FRSC</span>
            <h1>41%</h1>
          </div>
        </div>
      </div>
      <div className="chart_main_container">
        <div>
          <h1 className="common_header">Visitor Graph</h1>
          <div className="chart_container"></div>
        </div>
        <div>
          <h1 className="common_header">Location Wise</h1>
          <div className="chart_container"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
