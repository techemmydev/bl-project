import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Hesder/Header";
import Modal from "../components/Modal/Modal";
import DonutChart from "../../Staffs/StaffProfile/Components/DonutAcoountChart/DonutChart";
import style from "../Home/Home.module.css";
import EmployeeGender from "../components/EmplyeeGender/EmployeeGender";
import Transactions from "../components/Transaction/Transactions";
import RevenueChart from "../components/ChartRevenue/RevenueChart";
import QuickLink from "../components/QuickLinks/QuickLink";
import FundsChart from "../components/FundsRevenue/FundsChart";
import DashProfileCard from "../DashboardProfile/DashProfileCard";
import { Routes, Route } from "react-router-dom";

const HomeDashboard = () => {
  return (
    <React.Fragment>
      <div className={` ${style.homecontaner}`}>
        <Routes>
          <Route
            path=""
            element={
              <>
                <div
                  className={`d-flex justify-content-end ${style.hidemodal}`}
                >
                  <Modal />
                </div>
                <Header />
                <div className={style.flex_container}>
                  <div className={style.flex_container1}>
                    <DonutChart />
                  </div>
                  <div className={style.flex_container2}>
                    <EmployeeGender />
                  </div>
                  <div className={style.flex_container2}>
                    <Transactions />
                  </div>
                </div>
                <div className={style.chart_container}>
                  <div>
                    <RevenueChart />
                  </div>
                  <div className={style.hide}>
                    <QuickLink />
                  </div>
                </div>
                <div className={style.show1}>
                  <FundsChart />
                </div>
                <div className={style.show}>
                  <QuickLink />
                </div>
              </>
            }
          />
          <Route path="profile" element={<DashProfileCard />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default HomeDashboard;
