import React from "react";
import style from "../Navbar/nav.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userpicture from "../Navbar/userPicture/userpicture.png";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../UseContext/ContextProvider";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  // code for my usecontext
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddStaffClick = () => {
    navigate("/home/dashboard/profile");
  };
  const { filter, user, setUser, welcomrnote } = useContext(GlobalContext);

  useEffect(() => {
    let isMounted = true; // To prevent state update if the component is unmounted
    async function fetchUser() {
      // try {
      //   const response = await fetch("/api/user");
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }
      //   const data = await response.json();
      //   setUser({
      //     name: data.name, // Assuming the API returns { name: "Aderonke", profileImage: "url_to_image" }
      //     profileImage: data.profileImage,
      //   });
      // } catch (error) {
      //   console.error("Error fetching user data", error);
      // }
    }

    fetchUser();
    // Cleanup function to run when the component unmounts
    return () => {
      isMounted = false; // Prevent further state updates
    };
  }, [setUser]); // Dependency array ensures the effect runs only once on mount

  // Define titles and placeholders for different paths in my Navbar
  const pageTitles = {
    "/home": "Dashboard",
    "/home/transactions": "Transactions",
    "/home/staffs": "Staffs",
    "/home/staffs/add": "Add Staff", // Add this line for Add Staff page
    "/home/customers": "customer",
    "/home/customers/addcustomer": "Add customer",
    "/home/accounts": "accounts",
  };

  const searchPlaceholders = {
    "/home": "Search dashboard...",
    "/home/transactions": "Search transactions...",
    "/home/staffs": "Search staffs...",
    "/home/staffs/add": "Search staff details...", // Add this line for Add Staff page
    "/home/customers": "Search customers...",
    "/home/customers/addcustomer": "Search customers...",
    "/home/accounts": "Search accounts...",
  };

  // Determine the title based on the location and filter
  const title = location.pathname.includes("/home/accounts/loan-history")
    ? "Loan Account"
    : location.pathname.includes("/home/accounts/saving-history")
    ? "Saving Account"
    : location.pathname.includes("/home/accounts/ajo-history")
    ? "Ajo Account"
    : location.pathname.includes("home/staffs/staffprofile/")
    ? "Staffs"
    : location.pathname === "/home/dashboard"
    ? `Hello ${user.name || " Aderonke"}`
    : location.pathname.includes("/home/dashboard/profile")
    ? `My profile`
    : filter === "Ajo"
    ? "Ajo Account"
    : filter === "Savings"
    ? "Savings Account"
    : filter === "Loan"
    ? "Loan Account"
    : pageTitles[location.pathname] || "";

  // Use appropriate placeholder based on the current path
  const placeholder =
    searchPlaceholders[location.pathname] || "Search dashboard...";

  // Determine if the current path is the dashboard
  const isDashboard = location.pathname === "/home/dashboard";
  return (
    <header className={` ${style.NavbarContainer}`}>
      <div className={`${style.Navbartitle_content}`}>
        <div>
          <h1>{title}</h1>

          {isDashboard && <p>{user.welcomrnote}</p>}
        </div>
      </div>
      <div className="position-relative">
        <input
          type="text"
          className={`form-control ${style.inputWidth}`}
          placeholder={placeholder}
          style={{ paddingRight: "2.5rem" }}
        />
        <FiSearch
          className="position-absolute"
          style={{
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            fontSize: "13px",
            color: "#4A4A4A",
            cursor: "pointer",
          }}
        />
      </div>
      <div className={`  ${style.userprofilesetting_container}`}>
        <button
          type="button"
          className={`btn btn-primary position-relative ${style.notification_button} `}
        >
          <FaBell />
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
        </button>
        <div className={`dropdown profile-dropdown  ${style.notification_bg} `}>
          <NavLink
            className=" d-flex align-items-center text-decoration-none gap-2 p-1 "
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.profileImage || userpicture} // Fallback to a default image if not available
              alt="Profile Image"
              className={style.profile_image}
            />
            <div className={style.user_name}>
              <div>{user.name || "Adebisi Aderonke"}</div>
              <small className="text-muted">Admin</small>
            </div>
            <FiChevronDown
              style={{
                fontSize: "1.2rem",
                marginLeft: "5px",
                color: " #4a4a4a",
              }}
            />
          </NavLink>
          <ul className={`dropdown-menu dropdown-menu-end  ${style.nalink}`}>
            <li onClick={handleAddStaffClick}>
              <NavLink className={` ${style.dropdownItem}`}>
                <span>
                  <CgProfile />
                </span>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className={` ${style.dropdownItem}`} to={"/"}>
                <span>
                  <IoIosLogOut />
                </span>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
