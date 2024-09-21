//import createcontex
import React from "react";
import { createContext, useState, useEffect, useRef } from "react";

// export createcontex store it in a variable

export const GlobalContext = createContext();

//
const ContextProvider = ({ children, timeout = 600000 }) => {
  // Default timeout to 10 minutes (600,000 milliseconds)
  const [filter, setFilter] = useState("All");
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
    welcomrnote: "Welcome to your dashboard",
  });
  const [userstatus, setUsersStatus] = useState([
    { id: 1, gender: "female", isActive: true, FullName: "Alice Smith" },
  ]);
  const [isLocked, setIsLocked] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "emmy"; // Replace with your password
  const activityTimeoutRef = useRef(null);

  const resetTimeout = () => {
    clearTimeout(activityTimeoutRef.current);
    console.log("Timeout reset. Setting up new timeout for", timeout);
    activityTimeoutRef.current = setTimeout(() => {
      console.log("Timeout expired. Locking screen.");
      setIsLocked(true); // Lock the screen after timeout
    }, timeout);
  };

  useEffect(() => {
    const handleActivity = () => {
      console.log("User activity detected");
      resetTimeout();
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    document.addEventListener("click", handleActivity);
    document.addEventListener("scroll", handleActivity);

    resetTimeout(); // Initialize the timeout on component mount

    return () => {
      clearTimeout(activityTimeoutRef.current);
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      document.removeEventListener("click", handleActivity);
      document.removeEventListener("scroll", handleActivity);
    };
  }, []);

  //UsserStatus
  useEffect(() => {
    // Fetch user data from API
    // fetch("/api/users")
    //   .then((response) => response.json())
    //   .then((data) => setUsersStatus(data));
    setUsersStatus(userstatus);
  }, []);

  const valueToBePassed = {
    filter,
    setFilter,
    user,
    setUser,
    isLocked,
    setIsLocked,
    password,
    setPassword,
    correctPassword,
    timeout,
    userstatus,
  };

  return (
    <GlobalContext.Provider value={valueToBePassed}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
