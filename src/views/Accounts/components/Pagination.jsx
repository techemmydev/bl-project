import React from "react";
import styles from "./Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`container mt-5 ${styles.pageLink_container}`}>
      <div className={`${styles.pageLink_span}`}>
        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
        entries
      </div>
      <nav aria-label="Page navigation" className={styles.paginationContainer}>
        <ul className={`pagination ${styles.Pagination}`}>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className={`page-link ${styles.pageLink}`}
              onClick={() => onPageChange(currentPage - 1)}
              aria-label="Previous"
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                onClick={() => onPageChange(number)}
                className={`page-link ${styles.pageLink}`}
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <button
              className={`page-link ${styles.pageLink}`}
              onClick={() => onPageChange(currentPage + 1)}
              aria-label="Next"
              disabled={currentPage === pageNumbers.length}
            >
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
