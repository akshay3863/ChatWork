import React from "react";

const Deploy = () => {
  return (
    <div>
      <h1 className="common_header">Bot Manager</h1>
      <div className="Dep_Container">
        <div className="Dep_Input">
          <span>Destination :</span>
          <input placeholder="Destination" />
        </div>
        <div className="Dep_btn_Container">
          <div className="Dep_Btn">Deploy</div>
          <div className="Dep_Outline_Btn Dep_Btn">Deploy</div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
