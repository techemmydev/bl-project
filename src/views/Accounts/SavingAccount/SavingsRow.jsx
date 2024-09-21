import React, { useContext } from "react";
import style from "../SavingAccount/Savings.module.css";

import { useNavigate } from "react-router-dom";
import UserStatus from "../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../UseContext/ContextProvider";
const SavingsRow = ({ transaction, index }) => {
  const navigate = useNavigate();

  const { userstatus } = useContext(GlobalContext);
  const handleNameClick = () => {
    navigate(`saving-history/${transaction.id}`);
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
      <td>{transaction.Withdrawals}</td>
      <td>{transaction.Deposits}</td>
    </tr>
  );
};

export default SavingsRow;
