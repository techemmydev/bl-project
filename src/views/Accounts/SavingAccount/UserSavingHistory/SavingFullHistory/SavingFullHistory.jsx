import React, { useContext } from "react";
import { SavingsfullhistoryData } from "./SavingFullHistorys";
import style from "../SavingFullHistory/style.module.css";

import deposit from "../../../AccountIcons/Deposit.svg";
import Withdrawal from "../../../AccountIcons/Withdrawal.svg";
import userEditimage from "../../../AccountIcons/edit.png";
import UserStatus from "../../../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../../../UseContext/ContextProvider";

const SavingFullHistory = () => {
  const { userstatus } = useContext(GlobalContext);
  // Calculate totals
  const totalWidthrawl = SavingsfullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.withdrawal || 0);
    },
    0
  );
  const totalDescription = SavingsfullhistoryData.transactions.reduce(
    (total, transaction) => {
      return total + (transaction.descriptions || 0);
    },
    0
  );

  const totalBalance = SavingsfullhistoryData.transactions.reduce(
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
            <p>{SavingsfullhistoryData.Name}</p>
            <p>{SavingsfullhistoryData.AccountType}</p>
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
            {SavingsfullhistoryData.transactions.map((transaction, index) => (
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

export default SavingFullHistory;
