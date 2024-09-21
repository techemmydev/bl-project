// src/views/Accounts/HistoryDetails/LoanHistory/LoanHistory.js

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../AjoCard/style.module.css"; // create your styling here
import Depositicon from "../../../../../assets/images/Deposit.svg";
import Withdrawal from "../../../../../assets/images/Withdrawal.svg";
import EditButtonComponents from "../../../../../component/EditButton/EditButtonComponents";

import { useNavigate } from "react-router-dom";
import { CustomerProfilesData } from "../../../../Customers/CustomerProfile/CustomerData";
import EditCustomeAccountInfo from "../../../EditCustomersAccount/EditCustomeAccountInfo";
import EditCustomerInfo from "../../../../Customers/EditCustomerInformation/EditCustomerInfo";
import UserStatus from "../../../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../../../UseContext/ContextProvider";

const AjoCard = () => {
  const { id } = useParams();
  const [isEditingCustomer, setIsEditingCustomer] = useState(false);
  const [editingAccount, seteditingAccount] = useState(false);
  const profile = CustomerProfilesData.find((profile) => profile.id);

  // Fetch loan details based on ID or pass them down via props
  // For now, we use mock data or placeholders
  const loanDetails = {
    LedgerBalance: 10000,
    BookBalance: 10000,
    Name: "Caleb Adewunmi",
    AccountBalance: "₦ 25,000",
    AccountNumber: "2231564883",
    registeredDate: "12th, July 2024",
    transactions: [
      {
        date: "04/06/2024",
        description: "Online Banking 04/06/2024 ",
        deposits: "₦25,500",
        Repayment: "25th of march 2024",
        balance: "₦25,500",
      },
      {
        date: "05/10/2024",
        description: "Online Banking",
        deposits: "",
        Repayment: "25th of march 2024",
        balance: "₦10,500",
      },
      {
        date: "01/01/2024",
        description: "Online Banking 04/06/2024 ",
        deposits: "₦25,500",
        Repayment: "25th of march 2024",
        balance: "₦25,500",
      },
    ],
  };

  const navigate = useNavigate();

  const handleNameClick = () => {
    navigate(`/home/accounts/ajo-account/${id}/fullHistory`);
  };
  const { userstatus } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <div className={` ${style.loanHistoryContainer}`}>
        {isEditingCustomer ? (
          <EditCustomerInfo
            profile={profile}
            setIsEditing={setIsEditingCustomer}
          />
        ) : editingAccount ? (
          <EditCustomeAccountInfo
            loanDetails={loanDetails}
            setIsEditing={seteditingAccount}
          />
        ) : (
          <>
            <div className={` ${style.userIndicator}`}>
              <div className={` ${style.user}`}>
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
                </div>
                <p>{loanDetails.Name}</p>
              </div>
              <div className={` ${style.userEditimage}`}>
                <EditButtonComponents onclick={setIsEditingCustomer} />
              </div>
            </div>
            <div className={style.Transaction_box}>
              <div className={` ${style.inner}`}>
                <h1>Ajo </h1>

                <EditButtonComponents onclick={seteditingAccount} />
              </div>
              <main className={` ${style.main_container}`}>
                <div className={style.header}>
                  <div className={style.customerDetails}>
                    <p>Ledger Balance: ₦ {loanDetails.LedgerBalance} </p>
                    <p>Book Balance: ₦ {loanDetails.BookBalance} </p>
                    <p>Available Balance: {loanDetails.AccountBalance} </p>
                    <p>Account Number: {loanDetails.AccountNumber}</p>
                    <p>Date Account Registered: {loanDetails.registeredDate}</p>
                  </div>
                  <div
                    className={`mt-4 d-flex justify-content-around gap-3 ${style.buttonContainer}`}
                  >
                    <button className="btn btn-outline-success">
                      <img
                        src={Depositicon}
                        alt=""
                        className={style.ajoicons}
                      />{" "}
                      <span>Deposit</span>
                    </button>
                    <button className="btn btn-outline-danger">
                      <img src={Withdrawal} alt="" className={style.ajoicons} />{" "}
                      <span>Withdrawal</span>
                    </button>
                  </div>
                </div>
                <div className={style.transactions}>
                  <h4>Transaction History</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>

                        <th>Repayment Date</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanDetails.transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td>{transaction.date}</td>
                          <td>{transaction.description}</td>
                          <td>{transaction.Repayment}</td>

                          <td>{transaction.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h6 onClick={handleNameClick} className={style.seeMoreLink}>
                  ...See more
                </h6>
              </main>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default AjoCard;
