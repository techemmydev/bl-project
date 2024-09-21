import React, { useContext } from "react";
import { LoanfullhistoryData } from "./LoanFullHistorys";
import style from "../UserLoanFullHistory/style.module.css";

import userEditimage from "../../../AccountIcons/edit.png";
import UserStatus from "../../../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../../../UseContext/ContextProvider";

const LoanFullHistory = () => {
  const { userstatus } = useContext(GlobalContext);
  // Calculate totals
  const totalRepayment = LoanfullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.Repayment || 0);
    },
    0
  );

  const totalBalance = LoanfullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.balance || 0);
    },
    0
  );

  return (
    <div>
      <div className={` ${style.userIndicator}`}>
        <div className={` ${style.user}`}>
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
          <div>
            <p>{LoanfullhistoryData.Name}</p>
            <p>{LoanfullhistoryData.AccountType}</p>
          </div>
        </div>
        {/* <div className={` ${style.userEditimage}`}>
          <img src={userEditimage} alt="" />
        </div> */}
      </div>
      <div className={style.transactions}>
        <h4>Transaction History</h4>
        <table className={`${style.table}`}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>

              <th>Repayment Date</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {LoanfullhistoryData.transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.Repayment}</td>

                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.totals}>
          <div className={style.totals_box}>
            <p>Total Repayment: ₦{totalRepayment.toLocaleString()}</p>
            <p>Total Balance: ₦{totalBalance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanFullHistory;
