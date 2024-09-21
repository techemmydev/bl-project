import React from "react";
// import "../../assets/styles/style.css";
import styles from "./Staffid.module.css"; // Updated import
import pippybox from "../../assets/images/front-view-person-placing-coin-piggy-bank 1.png";
import piggylogo from "../../assets/images/Bl-logo.png";
import piggylines from "../../assets/images/line.png";
import Button from "../../component/ButtonComponents/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StaffID = () => {
  const [userId, setUserId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000); // 1 second after user stops typing

      return () => clearTimeout(typingTimeout);
    }
  }, [userId, isTyping]);

  const handleSubmit = (event) => {
    // setPassword(event.target.value);
    setIsTyping(true);
    console.log("staff Id is:", userId);
    setUserId("");

    if (userId !== "") {
      setSuccess("Login successful!");
      // Redirect to the successful page or perform sign-up
      navigate("/psw");
      setError("");
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 1000);
    } else {
      setError("Please provide your StaffID");
      setTimeout(() => {
        setError("");
      }, 1000);
      setSuccess("");
    }
  };

  return (
    <main className={`container-fluid  ${styles.staffIdContainer}`}>
      <div className={styles.innerBoxStaffId}>
        <img src={pippybox} alt="Piggy Bank" className={styles.staffIdImage} />
        <div className={styles.textOverlay}>
          <div className={styles.piggyLogoContainer}>
            <img
              src={piggylogo}
              alt="Piggy Bank logo"
              className={styles.piggyLogoImage}
            />
            <h1>Welcome Back</h1>
            <p>Welcome back! please enter your details</p>
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert-container">
                <div className="alert alert-danger text-center " role="alert">
                  {error}
                </div>
              </div>
            )}
            {success && (
              <div className="alert-container">
                <div className="alert alert-success text-center" role="alert">
                  {success}
                </div>
              </div>
            )}
            <div className={styles.flexingInputContainer}>
              <label htmlFor="username" className={styles.formLabel}>
                Staff I.D
              </label>
              <input
                type="number"
                className={`form-control ${styles.inputWidth}`}
                id="username"
                placeholder="Enter your I.D"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <Button
                className={styles.submitButton}
                onClick={handleSubmit}
                style={{
                  backgroundColor: !isTyping && userId ? "#BAEA15" : "",
                  color:
                    !isTyping && userId
                      ? "#4A4A4A"
                      : "var( --button-text-color)",
                }}
              >
                continue
              </Button>
              <div className={styles.imageLine}>
                <img
                  src={piggylines}
                  alt="Piggy Bank logo"
                  className={styles.piggylines_img}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Better Life 2077</p>
      </div>
    </main>
  );
};

export default StaffID;
