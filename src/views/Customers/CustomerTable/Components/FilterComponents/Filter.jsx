import React from "react";
import style from "../FilterComponents/Style.module.css";
import { FiChevronDown } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";
import Button from "../../../../../component/ButtonComponents/Button";
import { useContext } from "react";
import { GlobalContext } from "../../../../../UseContext/ContextProvider";
const Filter = () => {
  const { filter } = useContext(GlobalContext);

  return (
    <main className="d-flex align-items-center justify-content-end gap-3 p-3 mb-4 ">
      <div>
        {filter === "All" ? (
          <Button className={style.AddnewButton}>
            <LuDownload style={{ fontSize: "20px", fontWeight: "800" }} />
            Download PDF
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="d-flex align-items-center  gap-2 ">
        <span className={`  ${style.fiter_icons} `}>
          <FaFilter />
        </span>
        <div className={`dropdown profile-dropdown  ${style.notification_bg} `}>
          <a
            className=" d-flex align-items-center text-decoration-none gap-2 p-1 "
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={style.user_name}>
              <div>Withdrawals</div>
            </div>
            <FiChevronDown
              style={{
                fontSize: "1.2rem",
                marginLeft: "17px",
                color: "#B4B4B4",
              }}
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Filter;
