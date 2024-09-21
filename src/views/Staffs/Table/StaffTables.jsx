import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StaffRow from "./StaffRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockData1 } from "./StaffTable";
import style from "../Table/StaffRow.module.css";
import Pagination from "../../Transaction/components/Pagination";
import Button from "../../../component/ButtonComponents/Button";
import { FaPlus } from "react-icons/fa6";
import AddStaffForm from "../AddStaff/AddStaffForm";
import StaffProfileCard from "../StaffProfile/StaffProfileCard/StaffProfileCard";
import { useLocation } from "react-router-dom";
const StaffTables = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const location = useLocation();
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

  //add new
  const handleAddStaffClick = () => {
    navigate("add");

    // navigate("staffprofile");
  };

  // Update page title based on the path
  useEffect(() => {
    const pageTitles = {
      "/home/staffs": "Staffs",
    };

    const title = location.pathname.includes("/home/staffs")
      ? "Staffs"
      : pageTitles[location.pathname] || "Staffs";

    document.title = title; // Update browser tab title
  }, [location.pathname]);

  return (
    // container
    <div className={` ${style.stafftablecontainer}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="d-flex align-items-center justify-content-between">
                <h1
                  style={{ marginBottom: "20px" }}
                  className={`table ${style.hideonmobile}`}
                >
                  {document.title}
                </h1>{" "}
                <Button
                  className={`${style.AddnewButton_Mobile}`}
                  onClick={handleAddStaffClick}
                >
                  <FaPlus />
                  Add Staff
                </Button>
              </div>

              <div className="d-flex mb-3 ">
                <table className={`table ${style.theadfontsize}`}>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th># Staff I.D</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Address</th>
                      <th>Region</th>
                      <th>Roles</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTransactions.map((transaction, index) => (
                      <StaffRow
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
                  Add Staff
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

        <Route path="add" element={<AddStaffForm />} />
        <Route path="staffprofile/:id" element={<StaffProfileCard />} />
      </Routes>
    </div>
  );
};

export default StaffTables;
