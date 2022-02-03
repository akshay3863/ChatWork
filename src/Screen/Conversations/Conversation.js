import React from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import "./Conv.css";
const index = () => {
  return (
    <div>
      <DatePicker />
      <div className="Conversation_Container">
        <h1 className="common_header">Conversations</h1>
        <div className="Conversation_Sub_Container CBS">
          <div className="Conversation_Table_Container">
            <div className="Conversation_Table_Header CF18">
              <span>Date</span>
              <span>Type</span>
              <span>Chats</span>
            </div>
            <div className="Conversation_Table_Body_Container">
              {[2, 5, 5, 5, 5, 5, 55, 5].map((val, idx) => {
                return (
                  <div className="Conversation_Table_Body CF18" key={idx}>
                    <span>2/2/22 2:22 PM</span>
                    <span>Request</span>
                    <span>Agent: Hello, how can i help you?</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Chat_box_Container">
            <span className="common_header">Summary</span>
            <div className="Chat_Box_title">
              <div className="Chat_Box_title_cont">
                <span className="Chat_Box_title_key CF18">Chat ID</span>
                <span className="Chat_Box_title_value CF18">3863</span>
              </div>
              <div className="Chat_Box_title_cont">
                <span className="Chat_Box_title_key CF18">Chat ID</span>
                <span className="Chat_Box_title_value CF18">3863</span>
              </div>
              <div className="Chat_Box_title_cont">
                <span className="Chat_Box_title_key CF18">Chat ID</span>
                <span className="Chat_Box_title_value CF18">3863</span>
              </div>
              <div className="Chat_Box_title_cont">
                <span className="Chat_Box_title_key CF18">Chat ID</span>
                <span className="Chat_Box_title_value CF18">3863</span>
              </div>
            </div>
            <div className="Chat_Box_Body">
              <div className="Receiver_Chat CF15">Hello, Akshay</div>
              <div className="Sender_Chat CF15">Hello, Sir</div>
              <div className="Sender_Chat CF15">
                Are yopu there hello akshay, whatshpaa me
              </div>
              <div className="Receiver_Chat CF15">
                Are yopu there hello akshay, whatshpaa me
              </div>
              <div className="Receiver_Chat CF15">
                Are yopu there hello akshay, whatshpaa me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
