import React, { useState, useEffect } from "react";
import CustomerRow from "./CustomerRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockData1 } from "./CustomerTables";
import style from "./CustomerRow.module.css";
import Pagination from "../../Transaction/components/Pagination";
import Button from "../../../component/ButtonComponents/Button";
import { FaPlus } from "react-icons/fa6";
import Filter from "./Components/FilterComponents/Filter";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddCustomerForm from "../AddCustomer/AddCustomerForm";
import { useLocation } from "react-router-dom";
import CustomerProfileCard from "../CustomerProfile/CustomerProfileCard";

const CustomerTable = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(7);
  //   const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://api.yourservice.com/staff"); // Replace with your API endpoint
    //     const data = await response.json();
    //     setStaffData(data);
    //   } catch (error) {
    //     console.error("Error fetching staff data:", error);
    //   }
    // };

    // fetchData();
    setTransactions(mockData1);

    return () => {
      // Placeholder for cleanup logic if needed
      console.log("Cleanup function called for Customers");
    };
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    return transaction;
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
  //add new Customers
  const handleAddStaffClick = () => {
    navigate("addcustomer");
  };

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
  return (
    <div className=" mt-5 ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={` ${style.documenttitle} `}>
                <h1 style={{ marginTop: "90px" }}>{document.title}</h1>{" "}
              </div>
              <div>
                <Filter />
              </div>
              <div className="d-flex mb-3">
                <table className={`table t ${style.theadfontsize} `}>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Contact </th>
                      <th>Region</th>
                      <th>Date Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTransactions.map((transaction, index) => (
                      <CustomerRow
                        key={transaction.id}
                        transaction={transaction}
                        index={indexOfFirstTransaction + index}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <Button
                  className={style.AddnewButton}
                  onClick={handleAddStaffClick}
                >
                  <FaPlus />
                  Add Customer
                </Button>
              </div>
              <Pagination
                totalItems={filteredTransactions.length}
                itemsPerPage={transactionsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          }
        />
        <Route path="addcustomer" element={<AddCustomerForm />} />
        <Route path="customer-profile/:id" element={<CustomerProfileCard />} />
      </Routes>
    </div>
  );
};

export default CustomerTable;
