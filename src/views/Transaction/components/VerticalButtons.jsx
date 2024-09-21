import React from "react";
import styles from "../components/Pagination.module.css";
const VerticalButtons = () => {
  return (
    <div className={`${styles.verbody}`}>
      <div
        className={` btn-group-vertical ${styles.ver}`}
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" className="btn btn-outline-danger">
          Cancel
        </button>
        <button type="button" className="btn btn-outline-success">
          Approved
        </button>
        <button type="button" className="btn btn-outline-warning">
          Pending
        </button>
      </div>
    </div>
  );
};

export default VerticalButtons;
