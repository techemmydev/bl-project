import React from "react";
import styles from "../UserStatus/userstatus.module.css"; // Assuming you are using CSS modules
import feamaleicon from "../../assets/images/femaleicons.svg";
import maleicon from "../../assets/images/userGendericons.svg";
const UserStatus = ({ FullName, isActive, gender }) => {
  const avatar = gender === "female" ? feamaleicon : maleicon;

  return (
    <div className={styles.userStatus}>
      <div className={styles.avatarWrapper}>
        <img
          src={avatar}
          alt={`${FullName}'s avatar`}
          className={styles.avatar}
        />
        <span
          className={
            isActive ? styles.activeIndicator : styles.inactiveIndicator
          }
        ></span>
      </div>
      <span className={styles.userName}>{FullName}</span>
    </div>
  );
};

export default UserStatus;
