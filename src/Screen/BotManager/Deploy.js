import React from "react";

const Deploy = () => {
  return (
    <div>
      <h1 className="common_header">Bot Manager</h1>
      <div className="Dep_Container CBS">
        <div className="Dep_Input CF15">
          <span>Destination :</span>
          <input placeholder="Destination" className="CF15" />
        </div>
        <div className="Dep_btn_Container">
          <div className="Dep_Btn CF15">Deploy</div>
          <div className="Dep_Outline_Btn Dep_Btn CF15">Deploy</div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
