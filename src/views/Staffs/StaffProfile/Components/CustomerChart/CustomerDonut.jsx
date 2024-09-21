import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { staffProfiles } from "../../StaffProfileCard/StaffproData";
import style from "../CustomerChart/styleCustomerchart.module.css";
import Button from "../../../../../component/ButtonComponents/Button";

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerDonut = () => {
  const profile = staffProfiles.find((profile) => profile);

  const data = {
    datasets: [
      {
        label: "Active Users",
        data: [100, 120],
        backgroundColor: ["#EA442F", "#41DC0B"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="d-flex gap-3 p-2 mt-3">
        <Button className={style.AddnewButton}>Active Customers</Button>
        <Button className={style.AddnewButton4}>Inactive Customers</Button>
      </div>

      <div
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          marginLeft: "50px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "65px",
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
        >
          <span>
            {profile.accountDetails.ActiveCustomersInformation.ActiveCustomers}
          </span>{" "}
          <p style={{ fontSize: "12px" }}>Active Users</p>
        </div>
        <Doughnut data={data} />
      </div>
    </React.Fragment>
  );
};

export default CustomerDonut;
