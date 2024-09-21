import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import style from "../QuickLinks/quick.module.css";

const QuickLink = () => {
  return (
    <div>
      <div className={`card  ${style.card_container}`}>
        <div className={`card-body  ${style.cardbody}`}>
          <h5 className="card-title">Quick Links</h5>

          <p className="card-text">
            Based on your most frequently used modules
          </p>
          <Link to="/add-customers" className="card-link">
            Add Customers
          </Link>
          <Link to="/add-staffs" className="card-link">
            Add Staffs
          </Link>
          <Link to="/my-profile" className="card-link">
            My Profile
          </Link>
          <Link to="/settings" className="card-link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
