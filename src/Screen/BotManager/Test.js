import React from "react";
import SendIcon from "../../assets/send.svg";
import SmileyIcon from "../../assets/Smiley.svg";
import UserImg from "../../assets/user.png";
import BotImg from "../../assets/bot.png";
const Test = () => {
  return (
    <div>
      <h1 className="common_header">Bot Manager</h1>
      <div className="Chat_Box_Bot_manager CBS">
        <div className="Chat_Box_main_Container">
          <div className="Chat_box_header_Container"></div>
          <div className="Chat_Box_Body_Container">
            {[1, 2, 3, 4].map((val) => {
              return (
                <>
                  <div className="user_Chat_Container">
                    <img src={UserImg} />
                    <div className="user_Chat_Content">
                      <div className="user_Chat_Data">Hey! How are you?</div>
                      <span>10:50AM</span>
                    </div>
                  </div>
                  <div className="bot_Chat_Container">
                    <div className="bot_Chat_Content">
                      <div className="bot_Chat_Data">
                        Hey! How are you? hello akshay
                      </div>
                      <span>10:50AM</span>
                    </div>
                    <img src={BotImg} />
                  </div>
                </>
              );
            })}
          </div>
          <div className="Chat_box_Footer_Container">
            <div className="chat_Bot_Fot_main">
              <div className="Chat_bot_Input_Main">
                <input placeholder="Type your message here" />
                <img src={SmileyIcon} alt="SmileyIcon" />
              </div>
              <img src={SendIcon} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
