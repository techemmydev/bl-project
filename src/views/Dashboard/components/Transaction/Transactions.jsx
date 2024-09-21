import React from "react";
import styles from "../Transaction/transaction.module.css";
const Transactions = () => {
  return (
    <div className={`card  ${styles.transactionCard}`}>
      <h4>Transactions</h4>
      <div className={styles.transactionItem}>
        <span>Completed transactions</span>
        <span className={styles.transactionValue}>120</span>
      </div>
      <hr />
      <div className={styles.transactionItem}>
        <span>Pending transactions</span>
        <span className={styles.transactionValue}>80</span>
      </div>
      <hr />
      <div className={styles.transactionItem}>
        <span>Canceled transactions</span>
        <span className={styles.transactionValue}>40</span>
      </div>
      <hr />
      <div className={styles.transactionItem}>
        <span>Staged transactions</span>
        <span className={styles.transactionValue}>30</span>
      </div>
      <hr />
      <div className={styles.transactionItem}>
        <span>Loan Request</span>
        <span className={styles.transactionValue}>30</span>
      </div>
    </div>
  );
};

export default Transactions;
