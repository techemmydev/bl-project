import React, { useContext } from "react";
import style from "../AjoAccount/Ajo.module.css";
import usericons from "../AccountIcons/userGendericons.svg";
import usericons2 from "../AccountIcons/femaleicons.svg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../UseContext/ContextProvider";
import UserStatus from "../../../component/UserStatus/UserStatus";
const AjoTableRow = ({ transaction, index }) => {
  const navigate = useNavigate();
  const { userstatus } = useContext(GlobalContext);
  const handleNameClick = () => {
    navigate(`ajo-history/${transaction.id}`);
  };
  return (
    <tr className={`table t ${style.tabel_row}`}>
      <td>{index + 1}</td>
      <td>
        <div className={style.Email}>
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
          <span onClick={handleNameClick} style={{ cursor: "pointer" }}>
            {transaction.Name}
          </span>
        </div>
      </td>
      <td>{transaction.AccountNumber}</td>
      <td>{transaction.AccountBalance}</td>
      <td>{transaction.DailyDeposits}</td>
      <td>{transaction.Deposits}</td>
      <td>{transaction.Withdrawals}</td>
    </tr>
  );
};

export default AjoTableRow;
