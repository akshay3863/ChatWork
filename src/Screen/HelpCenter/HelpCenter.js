import React from "react";
import "./Help.css";
import Email_Icon from "../../assets/email.svg";
import Call_Icon from "../../assets/call.svg";
import Messages_Icon from "../../assets/messages.svg";
const HelpCenter = () => {
  return (
    <div>
      <h1 className="common_header">Help Center</h1>
      <div className="Help_GRid">
        <div className="help_Card">
          <div className="Help_Round">
            <img alt="email" src={Email_Icon} />
          </div>
          <div className="Help_Cont">
            <span className="Card_Title">Email</span>
            <span className="Card_SubTitle">help.smartbot@servicepack.ai</span>
          </div>
          <div className="Help_Btn">Email</div>
        </div>
        <div className="help_Card">
          <div className="Help_Round">
            <img alt="email" src={Call_Icon} />
          </div>
          <div className="Help_Cont">
            <span className="Card_Title">Phone</span>
            <span className="Card_SubTitle">+1 123-456 (7890)</span>
          </div>
          <div className="Help_Btn">Phone</div>
        </div>
        <div className="help_Card">
          <div className="Help_Round">
            <img alt="email" src={Messages_Icon} />
          </div>
          <div className="Help_Cont">
            <span className="Card_Title">Chat</span>
            <span className="Card_SubTitle">Chat With Us</span>
          </div>
          <div className="Help_Btn">Chat Now</div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
