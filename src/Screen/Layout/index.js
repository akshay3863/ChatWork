import React, { useState, useEffect } from "react";
import "./Layout.css";
import LogoImg from "../../assets/Logo_White.svg";
import DashbordIcon from "../../assets/Nav/dashbord.svg";
import BilingIcon from "../../assets/Nav/Billing.svg";
import HelpCenterIcon from "../../assets/Nav/Help Center.svg";
import BotManagerIcon from "../../assets/Nav/Bot Manager.svg";
import AnalyticsIcon from "../../assets/Nav/Analytics.svg";
import ConversationIcon from "../../assets/Nav/Conversations.svg";
import SettingIcon from "../../assets/Nav/Setting.svg";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import notification from "../../assets/notification.svg";
import qesIcon from "../../assets/qes.svg";
import DownIcon from "../../assets/down.svg";
import ProfilePic from "../../assets/profile.jfif";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../helper/Dimansion";
const Index = ({ Children: ReactComponent }) => {
  const [xPosition, setX] = useState(0);
  const { width } = useWindowDimensions();
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

  const SideMenuHanlder = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-250);
    }
  };

  useEffect(() => {
    if (width <= 768) {
      setX(-250);
    }
    if (width >= 768) {
      setX(0);
    }
  }, [width]);

  return (
    <div className="layout-container">
      <div
        className="side-bar-container"
        style={{
          transform: `translatex(${xPosition}px)`,
        }}
      >
        <div className="side-header-main">
          <img src={LogoImg} alt="Logo" className="Logo_Img" />
          <div className="Close_Container">
            <img
              src={CloseIcon}
              alt="Menu"
              onClick={() => {
                SideMenuHanlder();
              }}
            />
          </div>
        </div>
        {NavLinkData.map((value, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink SideBarLink CF18" : "SideBarLink CF18"
              }
              to={value.path}
              key={index}
              onClick={() => {
                if (width <= 768) {
                  return SideMenuHanlder();
                }
              }}
            >
              <img src={value.Icon} alt="Home" />
              <span>{value.Name}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="content-container">
        <div className="content-container-header">
          <div
            className="Menu_Container"
            onClick={() => {
              SideMenuHanlder();
            }}
          >
            <img src={MenuIcon} alt="Menu" />
          </div>
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

export default Index;
