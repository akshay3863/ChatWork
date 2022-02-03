import React from "react";
import PlusIcon from "../../assets/plus.svg";
const Build = () => {
  return (
    <div>
      <div className="Bot_Header">
        <h1 className="common_header">Bot Manager</h1>
        <div className="Add_button CF15">
          <img src={PlusIcon} alt="plus" />
          <div>Add KB</div>
        </div>
      </div>
      <div className="Bot_table CBS">
        <div className="Bot_table_Main">
          <div className="Bot_Table_header CF18">
            <div>Sl.No</div>
            <div>Intent</div>
            <div>Questionnaire</div>
            <div>Answers</div>
          </div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, indx) => {
            return (
              <div className="Bot_Table_Body CF18">
                <div>{indx + 1}.</div>
                <div></div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                  Aliquam purus feugiat felis nisl diam. Magna quam donec.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Build;
