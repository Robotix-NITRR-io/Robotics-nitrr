import React,{useState} from 'react'
import "./style.css";
import {RiMenu3Line,RiCloseLine} from "react-icons/ri";
import SideBar from '../sideBar/SideBar';
import logo from "../assets/favicon.png";

const Topbar = () => {
    
    return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin Dashboard</span>
          </div>
          <div className="topRight">
          <img src={logo} style={{    height: "40px", backgroundColor:"darkblue", borderRadius:"5px",
    width: "40px",
    paddingTop: "10px",
    paddingRight:"5px",
    paddingBottom: "10px"}} />
           
            
          </div>
        </div>
      </div>
    )
}

export default Topbar;
