import React, { useContext } from "react";
import style from "./CustomerRow.module.css";
import usericons from "../CustomerTable/CustomerRowIcons/userGendericons.svg";
import usericons2 from "../CustomerTable/CustomerRowIcons/femaleicons.svg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../UseContext/ContextProvider";
import UserStatus from "../../../component/UserStatus/UserStatus";

const CustomerRow = ({ transaction, index }) => {
  const { userstatus } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleAddStaffClick = () => {
    // Make sure the path matches the route definition in App.js
    navigate(`customer-profile/${transaction.id}`);
  };
  return (
    <tr className={`table t ${style.tabel_row}`} onClick={handleAddStaffClick}>
      <td>{index + 1}</td>
      <td>
        <div className={style.imageContainer}>
          {userstatus.map((user) => {
            return (
              <UserStatus
                key={user.id}
                gender={user.gender}
                isActive={user.isActive}
                // FullName={profile.FullName}
              />
            );
          })}
          <span onClick={handleAddStaffClick}>{transaction.Name}</span>
        </div>
      </td>
      <td>{transaction.Email}</td>
      <td>{transaction.Contact}</td>
      <td>{transaction.Address}</td>

      <td>{transaction.Region}</td>

      <td>{transaction.DateRegistered}</td>
    </tr>
  );
};

export default CustomerRow;
