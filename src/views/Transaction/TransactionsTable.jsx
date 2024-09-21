import React, { useState, useEffect } from "react";
import TransactionRow from "../Transaction/TransactionRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockData1 } from "./TransactionTable";
import style from "../Transaction/TransactionTable.module.css";
import Pagination from "./components/Pagination";
import { useLocation } from "react-router-dom";
const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(7);
  const location = useLocation();
  {
    /* <FiDownload /> */
    // <AiOutlineUpload />
  }
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

    setTransactions(mockData1);
    return () => {
      // Placeholder for cleanup logic if needed
      console.log("Cleanup function called for transaction");
    };
    // fetchTransactions();
  }, []);

  // Update page title based on the path
  useEffect(() => {
    const pageTitles = {
      "/home/transactions": "Transactions",
    };

    const title = location.pathname.includes("/home/transactions")
      ? "Transactions"
      : pageTitles[location.pathname] || "Transactions";

    document.title = title; // Update browser tab title
  }, [location.pathname]);

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "All") return true;
    return transaction.status === filter;
  });
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    // container
    <div className=" mt-5 ">
      <div className={` ${style.documenttitle} `}>
        <h1 style={{ marginTop: "100px" }}>{document.title}</h1>{" "}
      </div>
      {/* Use document.title */}
      <div className="d-flex mb-3">
        {["All", "Completed", "Pending", "Canceled", "Staged"].map((status) => (
          <button
            key={status}
            className={` me-5 ${
              filter === status ? style.isTrue : style.isFalse
            } ${style.myButton}`}
            onClick={() => {
              setFilter(status);
              setCurrentPage(1); // Reset to first page on filter change
            }}
          >
            {status}
          </button>
        ))}
      </div>
      <div className={style.tableWrapper}>
        <table className={`table t ${style.theadfontsize} `}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th></th>
              <th>Trx Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                index={indexOfFirstTransaction + index}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredTransactions.length}
        itemsPerPage={transactionsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionsTable;
