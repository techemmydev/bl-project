import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";

import styles from "../component/cale.module.css";
import UserStatus from "./UserStatus/UserStatus";
import { GlobalContext } from "../UseContext/ContextProvider";
import Depositicon from "../assets/images/Deposit.svg";
import Withdrawal from "../assets/images/Withdrawal.svg";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import AjoTransactionForm from "./AllAccountCard/AccountAjoCard/AjoTransactionForm";
const calendarData = [
  // { date: "2024-08-01", status: "mark", amount: 500 },
  // { date: "2024-08-02", status: "cancel", amount: 300 },
];
const YourComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(""); // 'Deposit' or 'Withdrawal'

  useEffect(() => {
    const today = new Date();
    console.log("Today's Date: ", today.toDateString());
  }, []);

  const handleButtonClick = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`${formType} form submitted`);
    setShowForm(false); // Hide the form after submission
  };

  const { userstatus } = useContext(GlobalContext);

  // const getTileContent = ({ date, view }) => {
  //   if (view === "month") {
  //     const dayData = calendarData.find((d) => {
  //       const calendarDate = new Date(d.date);
  //       return (
  //         calendarDate.getFullYear() === date.getFullYear() &&
  //         calendarDate.getMonth() === date.getMonth() &&
  //         calendarDate.getDate() === date.getDate()
  //       );
  //     });
  //     if (dayData) {
  //       return (
  //         <div className={styles.tileContent}>
  //           {dayData.status === "mark" ? (
  //             <FaCheckCircle color="green" />
  //           ) : (
  //             <FaTimesCircle color="red" />
  //           )}
  //           <span>{`₦${dayData.amount}`}</span>
  //         </div>
  //       );
  //     }
  //   }
  //   return null;
  // };
  return (
    <>
      {showForm ? (
        <AjoTransactionForm types={formType} onSubmit={handleFormSubmit} />
      ) : (
        <>
          <div className={`p-3 ${styles.AjoBoxContainer}`}>
            <div className={`${styles.userstatusAccoubtype}`}>
              {userstatus.map((user) => {
                return (
                  <UserStatus
                    key={user.id}
                    gender={user.gender}
                    isActive={user.isActive}
                    FullName={user.FullName}
                  />
                );
              })}

              <span className="mt-3">Ajo</span>
            </div>
            <div className={`mt-2 ${styles.AmountContainer}`}>
              <h4 className="fw-bold">₦ 977,000</h4>
              <small className="">Book balance: ₦ 67,500.67</small>
            </div>
            <div
              className={`mt-4 d-flex justify-content-around ${styles.buttonContainer}`}
            >
              <button
                className="btn btn-outline-success"
                onClick={() => handleButtonClick("DEPOSIT")}
              >
                <img src={Depositicon} alt="" className={styles.ajoicons} />{" "}
                <span>Deposit</span>
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleButtonClick("MAKE WITHDRAWAL")}
              >
                <img src={Withdrawal} alt="" className={styles.ajoicons} />{" "}
                <span>Withdrawal</span>
              </button>
            </div>

            <div className={`mt-2 ${styles.AjoBox}`}>
              <h5>AJO CARD</h5>
              <Calendar
                className={styles.customCalendar}
                // tileContent={getTileContent}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default YourComponent;
