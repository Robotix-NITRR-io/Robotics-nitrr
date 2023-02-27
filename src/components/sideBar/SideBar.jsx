import React from 'react';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@mui/icons-material";
  import { Link } from 'react-router-dom';
import "./style.css";
const SideBar = () => {
  return <div className="sidebar">
  <div className="sidebarWrapper">
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">Dashboard</h3>
    </div>
    
    <div className="sidebarMenu">
      
      <ul className="sidebarList">
        <Link to="/users" className="link">
          <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon" />
            <span className="user" > Users</span>
          </li>
        </Link>
      </ul>
  </div>
  </div>
</div>;
};

export default SideBar;
