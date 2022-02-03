import React, { useState } from "react";
import "./Botmanager.css";
import Build from "./Build";
import Deploy from "./Deploy";
import Display from "./Display";
import Test from "./Test";
const Botmanager = () => {
  const [activeTab, setActiveTab] = useState("Build");
  return (
    <div>
      <div className="Tab_bar_Container">
        <div className="Tab_Bar_Design CF15">
          <div
            className={activeTab === "Build" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Build");
            }}
          >
            Build
          </div>
          <div
            className={activeTab === "Test" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Test");
            }}
          >
            Test
          </div>
          <div
            className={activeTab === "Display" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Display");
            }}
          >
            Display
          </div>
          <div
            className={activeTab === "Deploy" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Deploy");
            }}
          >
            Deploy
          </div>
        </div>
      </div>
      <div className="Botmanager_Main_COntainer">
        {activeTab === "Build" ? (
          <Build />
        ) : activeTab === "Test" ? (
          <Test />
        ) : activeTab === "Display" ? (
          <Display />
        ) : (
          <Deploy />
        )}
      </div>
    </div>
  );
};

export default Botmanager;
