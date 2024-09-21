import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockData1 } from "../Accounts/AccountTables";
import style from "../Accounts/AccountTable.module.css";
import Pagination from "./components/Pagination";
import AccountRow from "./AccountRow";
import AjoTableData from "./AjoAccount/AjoTableData";
import SavinsgsData from "./SavingAccount/SavinsgsData";
import { useContext } from "react";
import { GlobalContext } from "../../UseContext/ContextProvider";
import Filter from "../Customers/CustomerTable/Components/FilterComponents/Filter";
import LoansData from "./LoanAccount/LoansData";
import YourComponent from "../../component/Calendrr";

import LoanComponent from "../../component/AllAccountCard/LoanTransactionCard/LoanComponent";
import TransactionForm from "../../component/AllAccountCard/SavingsCard/TransactionForm";

const AccountTable = () => {
  const { filter, setFilter } = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showYourComponentModal, setShowYourComponentModal] = useState(false);
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [AjoDeposit, setShowAjoDeposit] = useState(false);
  const [SavingsDeposit, setShowSavingsDeposit] = useState(false);

  const handleAjoActionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowYourComponentModal(true);
    setShowLoanModal(false);
    setShowAjoDeposit(false);
    setShowSavingsDeposit(false);
  };

  const handleLoanActionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowLoanModal(true);
    setShowYourComponentModal(false);
    setShowAjoDeposit(false);
    setShowSavingsDeposit(false);
  };
  const handleAjoDeposit = (transaction) => {
    setSelectedTransaction(transaction);
    setShowAjoDeposit(true);
  };
  const handleSavingsDesposit = (transaction) => {
    setSelectedTransaction(transaction);

    setShowSavingsDeposit(true);
  };
  const handleCloseModal = () => {
    setShowYourComponentModal(false);
    setShowLoanModal(false);
    setSelectedTransaction(null);
    setShowAjoDeposit(false);
    setShowSavingsDeposit(false);
  };

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
    // Cleanup function (currently empty)
    return () => {
      // Placeholder for cleanup logic if needed
      console.log("Cleanup function called");
    };
    // fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "All") return true;
    // return transaction.status === filter;
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

  const handleAccountTypeClick = (accountType) => {
    setFilter(accountType); // Update the filter to the clicked account type
    setCurrentPage(1); // Reset to the first page when filter changes
  };
  return (
    <div className="container-fluid mt-5 ">
      <div className={` ${style.filterButtons}`}>
        {["All", "Ajo", "Savings", "Loan"].map((status) => (
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

        <div className={` ${style.filterhide}`}>
          <Filter />
        </div>
      </div>
      {filter === "Ajo" ? (
        <AjoTableData transactions={currentTransactions} />
      ) : filter === "Savings" ? (
        <SavinsgsData transactions={currentTransactions} />
      ) : filter === "Loan" ? (
        <LoansData transactions={currentTransactions} />
      ) : (
        <div className={style.tableWrapper}>
          <table className={`table ${style.theadfontsize}`}>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Account Number</th>
                <th>Account Balance</th>
                <th>Account Type</th>
                <th></th>
                <th>Date Registered</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, index) => (
                <AccountRow
                  key={transaction.id}
                  transaction={transaction}
                  index={indexOfFirstTransaction + index}
                  onAccountTypeClick={handleAccountTypeClick}
                  onAjoActionClick={handleAjoActionClick}
                  onLoanActionClick={handleLoanActionClick}
                  onAjoDepositClick={handleAjoDeposit}
                  onSavingsDeposit={handleSavingsDesposit}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Conditionally render YourComponent as a modal */}
      {showYourComponentModal && (
        <div className={` ${style.modalOverlay}`}>
          <button className={style.closeButton} onClick={handleCloseModal}>
            ×
          </button>
          <YourComponent transaction={selectedTransaction} />{" "}
          {/* Pass any required props */}
        </div>
      )}

      {/* Conditionally render YourComponent as a modal */}
      {showLoanModal && (
        <div className={style.modalOverlay}>
          <div className={style.modalOverContext}>
            <button className={style.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <LoanComponent transaction={selectedTransaction} />
          </div>
        </div>
      )}
      {/* Conditionally render YourComponent as a modal */}
      {AjoDeposit && (
        <div className={style.modalOverlay}>
          <div className={style.modalOverContext}>
            <button className={style.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <TransactionForm
              transaction={selectedTransaction}
              type={"Withdrawal"}
            />
          </div>
        </div>
      )}
      {SavingsDeposit && (
        <div className={style.modalOverlay}>
          <div className={style.modalOverContext}>
            <button className={style.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <TransactionForm
              transaction={selectedTransaction}
              type={"Deposit"}
            />
          </div>
        </div>
      )}

      {filter === "All" ? (
        <Pagination
          totalItems={transactions.length}
          itemsPerPage={transactionsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : (
        ""
      )}
      {/* <Outlet /> */}
    </div>
  );
};

export default AccountTable;
