import React from "react";
import style from "../Modal/modal.module.css";
const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className={` btn btn-primary ${style.modal_button}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Quick Transactions
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className={` modal-content ${style.modal_box}`}>
            {/* <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div className="modal-body">
              <form className={`${style.formBox} p-4`}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="Enter customer card number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="accountName" className="form-label">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accountName"
                    placeholder="Enter account name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="accountType1" className="form-label">
                    Account Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accountType1"
                    placeholder="Enter account type"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="accountType2" className="form-label">
                    Account Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accountType2"
                    placeholder="Enter account type"
                  />
                </div>
                <div
                  className={`d-flex justify-content-between ${style.ctabutton}`}
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-success">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
