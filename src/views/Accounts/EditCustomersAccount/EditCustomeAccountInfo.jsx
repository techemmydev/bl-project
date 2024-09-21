import React, { useState, useEffect } from "react";

import style from "../EditCustomersAccount/editcustomeraccount.module.css";
import bridgr from "../../../assets/images/bridged.png";
import userIcon from "../../Customers/CustomerTable/CustomerRowIcons/femaleicons.svg";

const EditCustomeAccountInfo = ({ loanDetails, setIsEditing }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    AccountBalance: loanDetails.AccountBalance || "",
    AccountNumber: loanDetails.AccountNumber || "",
    registeredDate: loanDetails.registeredDate || "",
  });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);

      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setIsTyping(true); // Set isTyping to true when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // API call to save profile
      alert("Profile updated successfully!");
      setIsEditing(false); // Go back to the profile view after saving
    } catch (error) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormDataValid =
    formData.AccountBalance &&
    formData.AccountNumber &&
    formData.registeredDate;

  return (
    <div className={style.container}>
      <div className={style.imgcontainer}>
        <img src={bridgr} alt="Customer" />
        <div className={style.userIconContainer}>
          <img src={userIcon} alt="User Icon" className={style.userIcon} />
          <span className={style.onlineIndicator}></span>
        </div>
      </div>

      {/* Profile Details */}
      <div className={`  ${style.profileDetails}`}>
        <div className={`row justify-content-center  ${style.inner}`}>
          <div className="col-md-12">
            <h4 className="text-muted mb-4">Account details</h4>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="AccountBalance">Available balance</label>
                  <input
                    id="AccountBalance"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.AccountBalance}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="AccountNumber">Account number</label>
                  <input
                    id="AccountNumber"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={formData.AccountNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="registeredDate">Date Registered</label>
                  <input
                    id="registeredDate"
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    value={formData.registeredDate}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="col">
                  <label htmlFor="Email">Email</label>
                  <input
                    id="Email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value="email@gmail.com"
                  />
                </div> */}
              </div>
              <div className="row mb-3 mt-5 justify-content-center">
                <button
                  style={{
                    backgroundColor:
                      isFormDataValid && !isTyping ? "#5BD75B" : "#999999",
                    color: "white",
                  }}
                  type="submit"
                  className={`btn btn-primary ${style.saveButton}`}
                  disabled={!isFormDataValid || isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomeAccountInfo;
