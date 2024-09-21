import React from "react";
import { NavlinkSidebar } from "./NavbarLink";
import navStyles from "./sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import BLLogo from "../../assets/images/Bl-logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi"; // Import icons
const SideBar = () => {
  const location = useLocation();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [iconVisible, setIconVisible] = useState(false); // New state to manage icon visibility
  const isActive = (route) => location.pathname.startsWith(route);
  // const isActive = (route) => location.pathname === route;

  const toggleIcon = () => {
    setToggleNavbar(!toggleNavbar);
    setIconVisible(true); // Show close icon after sidebar has opened
    if (!toggleNavbar) {
      setTimeout(() => {
        setIconVisible(true); // Show close icon after sidebar has opened
      }, 200);
      // Delay matches the sidebar transition duration
    } else {
      setIconVisible(false); // Immediately hide close icon when closing
    }
  };

  return (
    <div>
      <button className={navStyles.navbar_icon} onClick={toggleIcon}>
        {!iconVisible ? (
          <VscThreeBars />
        ) : (
          // <MdClose className={navStyles.MdClosebutton} />""
          ""
        )}
      </button>

      <nav
        className={`${navStyles.sidebar} ${toggleNavbar ? navStyles.open : ""}`}
      >
        <MdClose className={navStyles.MdClosebutton} onClick={toggleIcon} />
        <ul className={navStyles.navigationLink}>
          <div className={navStyles.logowrap}>
            <img src={BLLogo} alt="" className={navStyles.logoimgae} />
          </div>
          {NavlinkSidebar.map((route) => (
            <li
              key={route.id}
              className={`${navStyles.navItem} ${
                isActive(route.path) ? navStyles.active : ""
              }`}
            >
              <Link
                to={route.path}
                onClick={() => {
                  setToggleNavbar(false); // Close the sidebar
                  setIconVisible(false); // Hide the close icon and show the hamburger menu
                }}
                className={navStyles.navLink}
              >
                <img
                  src={route.icons}
                  alt=""
                  className={navStyles.Sidebaricons}
                />{" "}
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Add this section only for mobile view */}
        <div className={navStyles.bottomSection}>
          <Link to={"/settings"} className={navStyles.bottomNavItem}>
            <FiSettings className={navStyles.icon} />
            <span>Settings</span>
          </Link>
          <Link
            to={"/settings"}
            href="/profile"
            className={`${navStyles.bottomNavItem} ${navStyles.profile}`}
          >
            <FiUser className={navStyles.icon} />
            <span>My Profile</span>
          </Link>
          <Link
            to={"/settings"}
            className={`${navStyles.bottomNavItem} ${navStyles.logout}`}
          >
            <FiLogOut className={navStyles.icon} />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
