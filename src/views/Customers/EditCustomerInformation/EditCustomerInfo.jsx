import React, { useState, useEffect } from "react";
import style from "../EditCustomerInformation/editcustomer.module.css";
import bridgr from "../../../assets/images/bridged.png";
import userIcon from "../CustomerTable/CustomerRowIcons/femaleicons.svg";

const EditCustomerInfo = ({ profile, setIsEditing }) => {
  const [formData, setFormData] = useState({
    FullName: profile.FullName || "",
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    phone: profile.phone || "",
    email: profile.email || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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
    formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <div className={style.container}>
      <div className={style.imgcontainer}>
        <img src={bridgr} alt="Customer" />
        <div className={style.userIconContainer}>
          <img src={userIcon} alt="User Icon" className={style.userIcon} />
          <span className={style.onlineIndicator}></span>
          <div className={style.fullnaame}>
            {" "}
            <h1>{profile.FullName}</h1>{" "}
          </div>
        </div>
      </div>
      {/* <div className={style.fullnaame}>
        {" "}
        <h1>{profile.FullName}</h1>{" "}
      </div> */}

      <div className={` ${style.profileDetails}`}>
        <div className={`row justify-content-center ${style.inner}`}>
          <div className="col-md-12">
            <h4 className="text-muted mb-4">Personal details</h4>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
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

export default EditCustomerInfo;
