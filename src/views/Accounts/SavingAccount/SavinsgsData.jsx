import React, { useState, useEffect } from "react";
import style from "../SavingAccount/Savings.module.css";
import SavingsRow from "./SavingsRow";
import { mockDataSavings } from "../SavingAccount/SavingsTables";
import Pagination from "../../Accounts/components/Pagination";

const SavinsgsData = ({ transactions }) => {
  const [transaction, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(3);

  useEffect(() => {
    // const fetchTransactions = async () => {
    //   try {
    //     const response = await fetch("/api/transactions");
    //     if (!response.ok) {
    //       throw new Error(`Error: ${response.statusText}`);
    //     }
    //     const data = await response.json();
    //     setTransactions(data);
    //   } catch (error) {
    //     console.error("Error fetching transactions:", error);
    //   }
    // };

    setTransactions(mockDataSavings);

    // fetchTransactions();
  }, []);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transaction.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container ">
      <table className={`table t ${style.theadfontsize}`}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Account Number</th>
            <th>Account Balance</th>
            <th>Withdrawals</th>
            <th>Deposits</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <SavingsRow
              key={transaction.id}
              transaction={transaction}
              index={indexOfFirstTransaction + index}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={transaction.length}
        itemsPerPage={transactionsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SavinsgsData;
