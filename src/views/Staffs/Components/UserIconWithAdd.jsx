import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Components/UserIconWithAdd.css";
import userp from "../icons/plus.svg";
import user2 from "../icons/User.svg";
const UserIconWithAdd = ({ userIcon = user2, addIcon = userp }) => {
  // const [userIcon, setUserIcon] = useState("");
  // const [addIcon, setAddIcon] = useState("");

  // useEffect(() => {
  //   // Fetch icons data from an API
  //   fetch("/api/icons")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserIcon(data.userIcon);
  //       setAddIcon(data.addIcon);
  //     })
  //     .catch((error) => console.error("Error fetching icons:", error));
  // }, []);
  return (
    <div className={`position-relative d-inline-block user-icon-container  `}>
      <div
        className={`bg-light rounded-circle d-flex justify-content-center align-items-center user-icon`}
      >
        <img src={userIcon} alt="User Icon" />
      </div>
      <div
        className={`position-absolute text-white rounded-circle d-flex justify-content-center align-items-center add-icon `}
      >
        <img src={addIcon} alt="Add Icon" />
      </div>
    </div>
  );
};

export default UserIconWithAdd;
