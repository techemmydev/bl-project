import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { staffProfiles } from "../../StaffProfileCard/StaffproData";
import Button from "../../../../../component/ButtonComponents/Button";
import style from "../DonutAcoountChart/styleDonut.module.css";
// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const profile = staffProfiles.find((profile) => profile);

  const data = {
    labels: ["Ajo", "Savings", "Loan"],
    datasets: [
      {
        label: "Active Users",
        data: [100, 120, 81],
        backgroundColor: ["#295DCA", "#F18629", "#E5BD3B"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          generateLabels: (chart) => {
            const { data } = chart;
            return data.labels.map((label, i) => {
              const backgroundColor = data.datasets[0].backgroundColor[i];
              return {
                text: label,
                fillStyle: backgroundColor,
                strokeStyle: backgroundColor,
                lineWidth: 1,
                hidden: false,
                index: i,
              };
            });
          },
          usePointStyle: true, // Makes the labels round by default
          pointStyleWidth: 15, // Adjust the size of the point
          font: {
            size: 10, // Increase the font size of the labels
            weight: "bold", // Add font weight to the labels
            family: "Inter",
          },
          color: "red", // Set the label text color
        },
      },
    },
  };

  return (
    <React.Fragment>
      <div className={`d-flex gap-3 p-2 mt-3 ${style.mobileviewstyle}`}>
        <Button className={style.AddnewButton}>Active Users</Button>
        <Button className={style.AddnewButton2}>Inactive Users</Button>
      </div>
      <div className={style.donutcontainer}>
        <div className={style.donutcontainer_inner}>
          <span>{profile.accountDetails.activeAccountUsers}</span>{" "}
          <p style={{ fontSize: "11px" }}>Active Users</p>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </React.Fragment>
  );
};

export default DonutChart;
