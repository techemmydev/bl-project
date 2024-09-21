import React from "react";
import usericons from "../CustomerTable/CustomerRowIcons/femaleicons.svg";
import style from "../CustomerProfile/Customerprofile.module.css";
import { CustomerProfilesData } from "./CustomerData";
import { useParams, NavLink } from "react-router-dom";
import elipice from "../CustomerTable/CustomerRowIcons/Ellipse.png";

import Button from "../../../component/ButtonComponents/Button";
import EditCustomerInfo from "../EditCustomerInformation/EditCustomerInfo";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../UseContext/ContextProvider";
import UserStatus from "../../../component/UserStatus/UserStatus";
import EditButtonComponents from "../../../component/EditButton/EditButtonComponents";

const CustomerProfileCard = () => {
  // const [profile, setProfile] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       try {
  //         const response = await fetch("https://api.example.com/staffprofile/1");
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         const data = await response.json();
  //         setProfile(data);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchProfile();
  //   }, []);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;
  const { userstatus } = useContext(GlobalContext);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const profile = CustomerProfilesData.find(
    (profile) => profile.id === Number(id)
  );

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <React.Fragment>
      <div className={`  ${style.full_container} mb-5`}>
        {isEditing ? (
          <EditCustomerInfo profile={profile} setIsEditing={setIsEditing} />
        ) : (
          <>
            <div className={style.image_position}>
              <img src={elipice} alt="Background" />
            </div>

            <div className={` ${style.userIndicator}`}>
              <div className={` ${style.user}`}>
                {userstatus.map((user) => {
                  return (
                    <UserStatus
                      key={user.id}
                      gender={user.gender}
                      isActive={user.isActive}
                      // FullName={profile.FullName}
                    />
                  );
                })}

                <div>
                  <p>{profile.FullName}</p>
                </div>
              </div>
              {/* <img
                src={userEditimage}
                alt="Edit Icon"
                onClick={() => setIsEditing(true)}
              /> */}
            </div>

            {/* profile information */}
            <section className={style.container_details}>
              <div className={style.inner_details}>
                <div className={` ${style.inner}`}>
                  <h1>Personal Information</h1>

                  <EditButtonComponents onclick={setIsEditing} />
                </div>
                <div className={style.details_flex}>
                  <div>
                    <label>First Name</label>
                    <h5>{profile.firstName}</h5>
                  </div>
                  <div className={style.lastName}>
                    <label>Last Name</label>
                    <h5>{profile.lastName}</h5>
                  </div>
                </div>

                <div className={style.details_flex}>
                  <div>
                    <label>Email Address</label>
                    <h5>{profile.email}</h5>
                  </div>
                  <div className={style.lastName}>
                    <label className={style.phonenumber}>Phone Number</label>
                    <h5>{profile.phone}</h5>
                  </div>
                </div>

                <div className={style.details_flex}>
                  <div>
                    <label>Bio</label>
                    <h5>{profile.role}</h5>
                  </div>
                  <div className={style.lastName}>
                    <label>Staff I.D</label>
                    <h5>{profile.staffid}</h5>
                  </div>
                </div>
              </div>

              <div className={` ${style.inner_details2}`}>
                <h1>Address</h1>
                <div className={style.details_flex}>
                  <div>
                    <label>Country</label>
                    <h5>{profile.country}</h5>
                  </div>
                  <div className={style.lastName}>
                    <label>State/City</label>
                    <h5>{profile.city}</h5>
                  </div>
                </div>
                <div className={style.details_flex}>
                  <div>
                    <label>Region</label>
                    <h5>{profile.state}</h5>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default CustomerProfileCard;
