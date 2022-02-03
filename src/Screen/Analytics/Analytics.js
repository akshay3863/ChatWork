import React from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import "./analytics.css";
import FAQ from "./FAQ.tsx";
import Keywords from "./Keywords.tsx";
import Topic from "./Topic.tsx";
const Index = () => {
  const [activeTab, setActiveTab] = React.useState("Topics");
  return (
    <div>
      <div className="Tab_bar_Container">
        <div className="Tab_Bar_Design CF15">
          <div
            className={activeTab === "Topics" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Topics");
            }}
          >
            Topics
          </div>
          <div
            className={activeTab === "Keywords" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("Keywords");
            }}
          >
            Keywords
          </div>
          <div
            className={activeTab === "FAQ" ? "Active_Tab" : ""}
            onClick={() => {
              setActiveTab("FAQ");
            }}
          >
            FAQ’s
          </div>
        </div>
      </div>
      <DatePicker />

      <div className="Anaclitic_Main_COntainer">
        {activeTab === "Topics" ? (
          <Topic />
        ) : activeTab === "Keywords" ? (
          <Keywords />
        ) : (
          <FAQ />
        )}
      </div>
    </div>
  );
};

export default Index;
