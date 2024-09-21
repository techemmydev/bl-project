import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../AllAccountCard/SavingsCard/style.module.css";
import UserStatus from "../../UserStatus/UserStatus";
import { GlobalContext } from "../../../UseContext/ContextProvider";
const TransactionForm = ({ type, onSubmit }) => {
  const { userstatus } = useContext(GlobalContext);
  return (
    <div className={`container mt-5  ${style.card_container}`}>
      <div className={`card ${style.card_inner}`}>
        <div className={` card-body`}>
          <div className="text-center mb-4">
            {userstatus.map((user) => {
              return (
                <UserStatus
                  key={user.id}
                  gender={user.gender}
                  isActive={user.isActive}
                  FullName={user.FullName}
                />
              );
            })}
            <p className="mt-3">Savings</p>
          </div>

          <h4 className="text-center">{type.toUpperCase()}</h4>

          <form onSubmit={onSubmit} className={` ${style.form_Inputdiv}`}>
            <div className="form-group mb-3">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                className={`form-control ${style.inputWidth}`}
                placeholder="₦ 30,000"
              />
            </div>

            <div className={`form-group mb-3}`}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className={`form-control ${style.inputWidth}`}
                placeholder="Description"
              />
            </div>

            <div className="form-check mb-3 mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="bypassCharges"
              />
              <label className="form-check-label" htmlFor="bypassCharges">
                By Pass Charges
              </label>
            </div>

            <div className="d-flex justify-content-between gap-5">
              <button type="button" className={`btn  ${style.cardButtonBack}`}>
                Back
              </button>
              <button
                type="submit"
                className={`btn  ${style.cardButtonContinue}`}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
