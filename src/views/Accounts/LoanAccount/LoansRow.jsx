import React, { useContext } from "react";
import style from "../LoanAccount/Loans.module.css";
import { useNavigate } from "react-router-dom";

import UserStatus from "../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../UseContext/ContextProvider";

const LoansRow = ({ transaction, index }) => {
  const navigate = useNavigate();

  const handleNameClick = () => {
    navigate(`loan-history/${transaction.id}`);
  };
  const { userstatus } = useContext(GlobalContext);
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
      <td>{transaction.LoanAmount}</td>
      <td>{transaction.Repayment}</td>
      <td>
        <button
          className={` ${
            transaction.LoanStatus === "Approved"
              ? "btn btn-outline-success"
              : transaction.LoanStatus === "Pending"
              ? " btn btn-outline-warning"
              : transaction.LoanStatus === "Declined"
              ? " btn btn-outline-danger"
              : transaction.LoanStatus === "Disbursed"
              ? "btn btn-outline-info"
              : "bg-secondary" // Default case for any other statuses
          } ${style.borderr}`}
        >
          {transaction.LoanStatus}
        </button>
      </td>
      {/* <td>{transaction.LoanStatus}</td> */}
    </tr>
  );
};

export default LoansRow;
