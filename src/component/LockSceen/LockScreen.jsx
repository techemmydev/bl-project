// LockScreen.jsx
import React, { useState, useEffect, useContext } from "react";
import styles from "../LockSceen/lockscreen.module.css";
import piggylogo from "../../assets/images/Bl-logo.png";
import "../../assets/styles/style.css";
import Button from "../../component/ButtonComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../UseContext/ContextProvider";

const LockScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    password,
    setPassword,
    correctPassword,
    setIsLocked,

    isLocked,
  } = useContext(GlobalContext);

  const [isTyping, setIsTyping] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);

      return () => clearTimeout(typingTimeout);
    }
  }, [password, isTyping]);

  // Inside App Component
  console.log("Current Lock State:", isLocked);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setIsLocked(false);
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <React.Fragment>
      <main className={`container-fluid ${styles.staffIdContainer}`}>
        <div className={styles.innerBoxStaffId}>
          <div className={styles.textOverlay}>
            <div className={styles.piggyLogoContainer}>
              <img
                src={piggylogo}
                alt="Piggy Bank logo"
                className={styles.piggyLogoImage}
              />
            </div>
            <form onSubmit={handleUnlock}>
              <div
                className={`position-relative ${styles.flexingInputContainer}`}
              >
                <label htmlFor="password" className={styles.formLabel}>
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className={`form-control ${styles.inputWidth}`}
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsTyping(true);
                  }}
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
                  type="submit"
                  style={{
                    backgroundColor: !isTyping && password ? "#53CAFD" : "",
                    color: "white",
                  }}
                >
                  Unlock
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default LockScreen;
