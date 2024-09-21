import React, { useContext } from "react";
import { AjofullhistoryData } from "./AjoFullHistorys";
import style from "../AjoFullHistory/style.module.css";

import deposit from "../../../AccountIcons/Deposit.svg";
import Withdrawal from "../../../AccountIcons/Withdrawal.svg";
import userEditimage from "../../../AccountIcons/edit.png";
import UserStatus from "../../../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../../../UseContext/ContextProvider";

const AjoFullHistory = () => {
  const { userstatus } = useContext(GlobalContext);
  // Calculate totals
  const totalWidthrawl = AjofullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.withdrawal || 0);
    },
    0
  );
  const totalDescription = AjofullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.descriptions || 0);
    },
    0
  );

  const totalBalance = AjofullhistoryData.transactions.reduce(
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
            <p>{AjofullhistoryData.Name}</p>
            <p>{AjofullhistoryData.AccountType}</p>
          </div>
        </div>
      </div>

      <div className={style.transactions}>
        <h4>Transaction History</h4>
        {/* Wrap the table in a scrollable container for mobile */}
        <div className={style.tableWrapper}>
          <table className={`${style.table}`}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>
                  <span> Withdrawals</span>
                  <img src={Withdrawal} alt="" className={`${style.icons}`} />
                </th>
                <th>
                  <span> Descriptions</span>
                  <img src={deposit} alt="" className={`${style.icons}`} />
                </th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {AjofullhistoryData.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.descriptionNarrative}</td>
                  <td>{transaction.withdrawal}</td>
                  <td>{transaction.descriptions}</td>

                  <td>{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={style.totals}>
          <div className={style.totals_box}>
            <p>Total withdrawal: ₦{totalWidthrawl.toLocaleString()}</p>
            <p>Total Description: ₦{totalDescription.toLocaleString()}</p>
            <p>Total Balance: ₦{totalBalance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjoFullHistory;
