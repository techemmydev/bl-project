import React from "react";
import SideBar from "../../component/SidebarComponet/SideBar";
import Navbar from "../../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import settingsicons from "../../assets/images/settingsIcon.svg";
import style from "../AppLayout/Applayout.module.css";

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className={`d-flex ${style.main_container}`}>
        <SideBar />

        <div className={`${style.content_container}`}>
          <Navbar />
          <div className={style.page_content}>
            <Outlet />
            <img
              src={settingsicons}
              alt="settings icon"
              className={style.settings_icon}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
