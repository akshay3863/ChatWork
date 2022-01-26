import React from "react";
import "./Layout.css";
import LogoImg from "../../assets/Logo_White.svg";
import DashbordIcon from "../../assets/Nav/dashbord.svg";
import BilingIcon from "../../assets/Nav/Billing.svg";
import HelpCenterIcon from "../../assets/Nav/Help Center.svg";
import BotManagerIcon from "../../assets/Nav/Bot Manager.svg";
import AnalyticsIcon from "../../assets/Nav/Analytics.svg";
import ConversationIcon from "../../assets/Nav/Conversations.svg";
import SettingIcon from "../../assets/Nav/Setting.svg";

import notification from "../../assets/notification.svg";
import qesIcon from "../../assets/qes.svg";
import DownIcon from "../../assets/down.svg";
import ProfilePic from "../../assets/profile.jfif";

import { NavLink } from "react-router-dom";
const index = ({ Children: ReactComponent }) => {
  const NavLinkData = [
    {
      path: "/dashboard",
      Name: "Dashboard",
      Icon: DashbordIcon,
    },
    {
      path: "/analytics",
      Name: "Analytics",
      Icon: AnalyticsIcon,
    },
    {
      path: "/conversations",
      Name: "Conversations",
      Icon: ConversationIcon,
    },
    {
      path: "/botmanager",
      Name: "Bot Manager",
      Icon: BotManagerIcon,
    },
    {
      path: "/settings",
      Name: "Settings",
      Icon: SettingIcon,
    },
    {
      path: "/billing",
      Name: "Billing",
      Icon: BilingIcon,
    },
    {
      path: "/helpcenter",
      Name: "Help Center",
      Icon: HelpCenterIcon,
    },
  ];

  return (
    <div className="layout-container">
      <div className="side-bar-container">
        <div className="side-header-main">
          <img src={LogoImg} alt="Logo" />
        </div>
        {NavLinkData.map((value, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink SideBarLink" : "SideBarLink"
              }
              to={value.path}
              key={index}
            >
              <img src={value.Icon} alt="Home" />
              <span>{value.Name}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="content-container">
        <div className="content-container-header">
          <div className="header-div">
            <div className="Hed_Out">
              <img src={notification} alt="Notification" />
            </div>
            <div className="Hed_Out">
              <img src={qesIcon} alt="qesIcon" />
            </div>
            <div className="Profile_Drop_Down">
              <img src={ProfilePic} alt="Profile" className="Profile" />
              <span>Akshay Solanki</span>
              <img src={DownIcon} alt="DownIcon" className="DownIcon" />
            </div>
          </div>
        </div>
        <div className="content-children-container">
          <ReactComponent />
        </div>
      </div>
    </div>
  );
};

export default index;
