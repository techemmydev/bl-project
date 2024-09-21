import React, { useContext } from "react";
import styles from "../LoanTransactionCard/LoanComponent.module.css";
import UserStatus from "../../UserStatus/UserStatus";

import { GlobalContext } from "../../../UseContext/ContextProvider";
import CountdownTimer from "../../CountDownTimer/CountDownTime";
const LoanComponent = () => {
  const targetDate = "2024-12-31T00:00:00";
  const { userstatus } = useContext(GlobalContext);
  return (
    <div className={` container ${styles.container}`}>
      <div className={styles.header}>
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

        <span className={styles.loanText}>Loan</span>
      </div>
      <h5 className="mb-3">REIMBURSEMENT</h5>
      <div className={styles.reimbursementContainer}>
        <div className={styles.loanInfo}>
          <h3 className={styles.amount}>₦ -30,000</h3>
          <p>Principal: ₦ -67,500.67</p>
          <p>Interest: ₦ -6,500.67</p>
          <p>Rate: 5%</p>
        </div>

        {/* <div className={styles.timeItem}>
            <h6>5</h6>
            <span>DAYS</span>
          </div>
          <div className={styles.timeItem}>
            <h6>12</h6>
            <span>HOURS</span>
          </div>
          <div className={styles.timeItem}>
            <h6>20</h6>
            <span>MINS</span>
          </div>
          <div className={styles.timeItem}>
            <h6>10</h6>
            <span>SECS</span>
          </div> */}
        <CountdownTimer targetDate={targetDate} />
      </div>
      <h5 className="mb-3">DEPOSIT</h5>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            placeholder="₦ 30,000"
            className="form-control"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="₦ 35,000"
            className="form-control"
          />
        </div>

        <div className={`form-check  ${styles.formGroup}`}>
          <input
            type="checkbox"
            id="bypassCharges"
            className="form-check-input"
          />
          <label htmlFor="bypassCharges">By Pass Charges</label>
        </div>

        <div className="d-flex justify-content-between gap-5">
          <button type="button" className={`btn  ${styles.cardButtonBack}`}>
            Back
          </button>
          <button type="submit" className={`btn  ${styles.cardButtonContinue}`}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanComponent;
