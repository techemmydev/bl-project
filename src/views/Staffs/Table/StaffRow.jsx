import React from "react";
import style from "../Table/StaffRow.module.css";

import { useNavigate } from "react-router-dom";
import UserStatus from "../../../component/UserStatus/UserStatus";
import { useContext } from "react";
import { GlobalContext } from "../../../UseContext/ContextProvider";
// import { useParams } from "react-router-dom";
const StaffRow = ({ transaction, index }) => {
  const { userstatus } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleAddStaffClick = () => {
    // Make sure the path matches the route definition in App.js
    navigate(`staffprofile/${transaction.id}`);
  };
  return (
    <tr className={`table t ${style.tabel_row}`} onClick={handleAddStaffClick}>
      <td>{index + 1}</td>
      <td>{transaction.StaffID}</td>
      <td>
        <div className={style.nameContainer}>
          {userstatus.map((user) => {
            return (
              <UserStatus
                key={user.id}
                gender={user.gender}
                isActive={user.isActive}
                // FullName={user.FullName}
              />
            );
          })}
          <span onClick={handleAddStaffClick}>{transaction.Name}</span>
        </div>
      </td>
      <td>{transaction.Contact}</td>
      <td>{transaction.Address}</td>

      <td>{transaction.Region}</td>

      <td>{transaction.Roles}</td>
      <td>{transaction.Department}</td>
    </tr>
  );
};

export default StaffRow;
