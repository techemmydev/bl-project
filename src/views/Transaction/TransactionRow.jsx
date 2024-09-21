import React, { useState, useEffect, useRef } from "react";
import style from "../Transaction/TransactionTable.module.css";
import withdrawal from "../Transaction/Transactionicons/Withdrawal.svg";
import deposit from "../Transaction/Transactionicons/Deposit.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import VerticalButtons from "./components/VerticalButtons";

const TransactionRow = ({ transaction, index }) => {
  const [showButtons, setShowButtons] = useState(false);
  const buttonRef = useRef(null);

  const toggleButtons = () => {
    setShowButtons((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setShowButtons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mouseout", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("mouseout", handleClickOutside);
    };
  }, []);
  return (
    <>
      <tr className={`table t ${style.tabel_row}`}>
        <td>{index + 1}</td>
        <td>{transaction.date}</td>
        <td>{transaction.customer}</td>
        <td>{transaction.accountNumber}</td>
        <td>₦{transaction.amount}</td>
        <td>{transaction.trxType}</td>
        <td>
          <div className={` ${style.iconsRenderings}`}>
            {transaction.paymentType === "Cash" &&
              transaction.trxType === "Deposit" && (
                <img
                  src={deposit}
                  className={`${style.icons}`}
                  alt="Deposit Icon"
                />
              )}
            {transaction.paymentType === "Transfer" &&
              transaction.trxType === "Withdrawal" && (
                <img
                  src={withdrawal}
                  className={`${style.icons}`}
                  alt="Withdrawal Icon"
                />
              )}
          </div>
        </td>

        <td>{transaction.trxType}</td>
        <td>
          <button
            className={` ${
              transaction.status === "Completed"
                ? "btn btn-outline-success"
                : transaction.status === "Pending"
                ? " btn btn-outline-warning"
                : transaction.status === "Canceled"
                ? " btn btn-outline-danger"
                : transaction.status === "Staged"
                ? "btn btn-outline-info"
                : "bg-secondary" // Default case for any other statuses
            } ${style.borderr}`}
          >
            {transaction.status}
          </button>
        </td>
        <td style={{ position: "relative" }} ref={buttonRef}>
          <div className={style.dotButtonIcons}>
            <button onClick={() => toggleButtons(true)}>
              <BsThreeDotsVertical style={{ color: "#4A4A4A" }} />
            </button>
            {showButtons && <VerticalButtons />}{" "}
            {/* Conditionally render VerticalButtons */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default TransactionRow;
