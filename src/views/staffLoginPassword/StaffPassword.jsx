import React from "react";
import styles from "../staffLoginPassword/Staffpassword.module.css"; // Updated import
import pippybox from "../../assets/images/front-view-person-placing-coin-piggy-bank 1.png";
import piggylogo from "../../assets/images/Bl-logo.png";
import piggylines from "../../assets/images/line.png";
import "../../assets/styles/style.css";
import Button from "../../component/ButtonComponents/Button";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const StaffPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000); // 1 second after user stops typing

      return () => clearTimeout(typingTimeout);
    }
  }, [password, isTyping]);

  const handleSubmit = (event) => {
    // setPassword(event.target.value);
    setIsTyping(true);
    console.log("the user password:", password);
    setPassword("");

    if (password !== "") {
      setSuccess("Login successful!");
      // Redirect to the successful page or perform sign-up
      navigate("/home/dashboard");
      setError("");
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 1000);
    } else {
      setError("Please provide your password");
      setTimeout(() => {
        setError("");
      }, 1000);
      setSuccess("");
    }
  };

  return (
    <React.Fragment>
      <main className={`container-fluid ${styles.staffIdContainer}`}>
        <div className={styles.innerBoxStaffId}>
          <img
            src={pippybox}
            alt="Piggy Bank"
            className={styles.staffIdImage}
          />
          <div className={styles.textOverlay}>
            <div className={styles.piggyLogoContainer}>
              <img
                src={piggylogo}
                alt="Piggy Bank logo"
                className={styles.piggyLogoImage}
              />
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
              <div
                className={`position-relative ${styles.flexingInputContainer}`}
              >
                <label htmlFor="username" className={styles.formLabel}>
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className={`form-control  ${styles.inputWidth}`}
                  id="username"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className={styles.eye}
                  style={{ cursor: "pointer" }}
                  onClick={handlePasswordToggle}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    className={`position-absolute ${styles.icons_eyes}`}
                  />
                </span>
                <Button
                  className={`${styles.submitButton}`}
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: !isTyping && password ? "#BAEA15" : "",
                    color:
                      !isTyping && password
                        ? "#4A4A4A"
                        : "var( --button-text-color)",
                  }}
                >
                  Sign In
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
    </React.Fragment>
  );
};

export default StaffPassword;
