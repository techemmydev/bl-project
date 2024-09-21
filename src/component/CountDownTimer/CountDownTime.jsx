import React, { useState, useEffect } from "react";
import styles from "../CountDownTimer/CountdownTimer.module.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={styles.countdown}>
      <div className={styles.timeBox}>
        <span className={styles.time}>{timeLeft.days || "0"}</span>
        <span className={styles.label}>DAYS</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.time}>{timeLeft.hours || "00"}</span>
        <span className={styles.label}>HOURS</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.time}>{timeLeft.minutes || "00"}</span>
        <span className={styles.label}>MINS</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.time}>{timeLeft.seconds || "00"}</span>
        <span className={styles.label}>SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
