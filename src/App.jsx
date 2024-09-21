import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import StaffID from "./views/staff-Id-Login/StaffID";
import StaffPassword from "./views/staffLoginPassword/StaffPassword";
import AppLayout from "./views/AppLayout/Applayout";
import TransactionsTable from "./views/Transaction/TransactionsTable";
import CustomerTable from "./views/Customers/CustomerTable/CustomerTable";
import AccountTable from "./views/Accounts/AccountTable";
import LoanCard from "./views/Accounts/LoanAccount/UserLoanHistory/UserLoanCard/LoanCard";
import AjoCard from "./views/Accounts/AjoAccount/UserAjoHistory/AjoCard/AjoCard";
import AjoFullHistory from "./views/Accounts/AjoAccount/UserAjoHistory/AjoFullHistory/AjoFullHistory";
import LoanFullHistory from "./views/Accounts/LoanAccount/UserLoanHistory/UserLoanFullHistory/LoanFullHistory";
import SavingCard from "./views/Accounts/SavingAccount/UserSavingHistory/SavingCard/SavingCard";
import SavingFullHistory from "./views/Accounts/SavingAccount/UserSavingHistory/SavingFullHistory/SavingFullHistory";
import HomeDashboard from "./views/Dashboard/Home/HomeDashboard";
import StaffTables from "./views/Staffs/Table/StaffTables";

// Import the LockScreen component

// Import the GlobalContext

import LockScreen from "./component/LockSceen/LockScreen";
import { GlobalContext } from "./UseContext/ContextProvider";

function App() {
  // Access the lock state using useContext
  const { isLocked } = useContext(GlobalContext);
  console.log("Is Locked:", isLocked);
  // Conditional rendering based on isLocked state
  return isLocked ? (
    <LockScreen />
  ) : (
    <Routes>
      <Route path="/" element={<StaffID />} />

      <Route path="/psw" element={<StaffPassword />} />
      <Route path="/home/*" element={<AppLayout />}>
        <Route path="dashboard/*" element={<HomeDashboard />} />
        <Route path="transactions" element={<TransactionsTable />} />
        <Route path="staffs/*" element={<StaffTables />} />
        <Route path="customers/*" element={<CustomerTable />} />
        <Route path="accounts" element={<AccountTable />} />
        <Route path="accounts/ajo-history/:id" element={<AjoCard />} />

        <Route
          path="accounts/ajo-account/:id/fullHistory"
          element={<AjoFullHistory />}
        />
        <Route path="accounts/loan-history/:id" element={<LoanCard />} />
        <Route
          path="accounts/loan-history/:id/fullHistory"
          element={<LoanFullHistory />}
        />
        <Route path="accounts/saving-history/:id" element={<SavingCard />} />
        <Route
          path="accounts/saving-history/:id/fullHistory"
          element={<SavingFullHistory />}
        />
      </Route>
    </Routes>
  );
}

export default App;

// {window.innerWidth <= 760 && (
//   <div className={style.mobileTotals}>
//     <p>Total withdrawal: ₦{totalWidthrawl.toLocaleString()}</p>
//     <p>Total Description: ₦{totalDescription.toLocaleString()}</p>
//     <p>Total Balance: ₦{totalBalance.toLocaleString()}</p>
//   </div>
// )}
