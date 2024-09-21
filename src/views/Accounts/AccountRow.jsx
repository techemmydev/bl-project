import React, { useState, useContext } from "react";
import style from "../Accounts/AccountTable.module.css";
import withdrawal from "../Transaction/Transactionicons/Withdrawal.svg";
import deposit from "../Transaction/Transactionicons/Deposit.svg";
import { GlobalContext } from "../../UseContext/ContextProvider";
import UserStatus from "../../component/UserStatus/UserStatus";
import { useNavigate } from "react-router-dom";
// Helper Component
const ActionDisplay = ({ accountType, action, onActionClick }) => {
  const iconSrc = action === "Deposit" ? deposit : withdrawal;
  const label = action === "Deposit" ? "Deposit" : "Withdrawal";

  return (
    <div
      className="d-flex align-items-center gap-4"
      onClick={onActionClick} // Trigger the modal on click
    >
      <img
        src={iconSrc}
        className={`ms-4 ${style.Accounticons}`}
        alt={`${label} Icon`}
      />
      <span>{label}</span>
    </div>
  );
};

const AccountRow = ({
  transaction,
  index,
  onAccountTypeClick,
  // onActionClick,
  onAjoActionClick,
  onLoanActionClick,
  onAjoDepositClick,
  onSavingsDeposit,
}) => {
  const { userstatus } = useContext(GlobalContext);
  const onActionClick = () => {
    if (
      transaction.AccountType === "Ajo" &&
      transaction.action === "Withdrawal"
    ) {
      onAjoActionClick(transaction); // Show YourComponent
    } else if (
      transaction.AccountType === "Loan" &&
      transaction.action === "Withdrawal"
    ) {
      onLoanActionClick(transaction); // Show LoanComponent
    } else if (
      transaction.AccountType === "Ajo" &&
      transaction.action === "Deposit"
    ) {
      onAjoActionClick(transaction); // Show LoanComponent
    } else if (
      transaction.AccountType === "Savings" &&
      transaction.action === "Withdrawal"
    ) {
      onAjoDepositClick(transaction); // Show LoanComponent
    } else if (
      transaction.AccountType === "Savings" &&
      transaction.action === "Deposit"
    ) {
      onSavingsDeposit(transaction); // Show LoanComponent
    }
  };

  const navigate = useNavigate();
  // const handleNameClick = () => {
  //   navigate(`ajo-history/${transaction.id}`);
  // };

  const handleNameClick = () => {
    if (transaction.AccountType === "Ajo") {
      navigate(`/home/accounts/ajo-history/${transaction.id}`);
    } else if (transaction.AccountType === "Loan") {
      navigate(`/home/accounts/loan-history/${transaction.id}`);
    } else if (transaction.AccountType === "Savings") {
      navigate(`/home/accounts/saving-history/${transaction.id}`);
    }
  };
  return (
    <>
      <tr
        className={`table t ${style.tabel_row}`}
        onClick={() => onAccountTypeClick(transaction.AccountType)}
      >
        <td>{index + 1}</td>
        <td onClick={() => onAccountTypeClick(transaction.AccountType)}>
          <div className={style.Email}>
            {userstatus.map((user) => (
              <UserStatus
                key={user.id}
                gender={user.gender}
                isActive={user.isActive}
              />
            ))}
            <span onClick={handleNameClick} style={{ cursor: "pointer" }}>
              {" "}
              {transaction.Name}
            </span>
          </div>
        </td>
        <td>{transaction.AccountNumber}</td>
        <td>{transaction.AccountBalance}</td>
        <td
          className={style.clickable} // Add a class for styling the clickable area
          // onClick={() => onAccountTypeClick(transaction.AccountType)}
        >
          {transaction.AccountType}
        </td>
        <td>
          <ActionDisplay
            accountType={transaction.AccountType}
            action={transaction.action}
            onActionClick={onActionClick} // Pass the modal handler herecomponent
          />
        </td>
        <td>{transaction.DateRegistered}</td>
      </tr>
    </>
  );
};

export default AccountRow;
