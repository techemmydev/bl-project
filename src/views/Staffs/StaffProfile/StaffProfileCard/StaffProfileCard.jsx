import React from "react";
// import usericons from "../../../Accounts/AccountIcons/femaleicons.svg";
// import userFemale from "../../../Accounts/AccountIcons/userGendericons.svg";
import style from "../StaffProfileCard/Staffprofile.module.css";
import { staffProfiles } from "./StaffproData";
import { useParams } from "react-router-dom";
import elipice from "../../icons/Ellipse.png";
import DonutChart from "../Components/DonutAcoountChart/DonutChart";
import HalfRating from "../Components/Ratings";
import Button from "../../../../component/ButtonComponents/Button";
import CustomerDonut from "../Components/CustomerChart/CustomerDonut";
import { useContext } from "react";
import { GlobalContext } from "../../../../UseContext/ContextProvider";
import UserStatus from "../../../../component/UserStatus/UserStatus";
const StaffProfileCard = () => {
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
  const profile = staffProfiles.find((profile) => profile.id === Number(id));

  // if (!profile) {
  //   return <div>Profile not found</div>;
  // }

  return (
    <React.Fragment>
      <div className={`  ${style.full_container} mb-5`}>
        <div className={style.image_position}>
          <img src={elipice} />
        </div>
        <div className={style.rattings}>
          <HalfRating />
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
            <div className={style.fullname}>
              <p>{profile.FullName}</p>
              <p>{profile.role}</p>
              <p>{profile.lastLogin}</p>
            </div>
          </div>
        </div>
        {/* profile information */}
        <section className={style.container_details}>
          <div className={style.inner_details}>
            <h1>Personal Information</h1>

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
                <label className={style.phonenumber}>phone Number</label>
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
                <label>country</label>
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
        <section className={style.container_details_Account}>
          <div className={style.inner_details_Account}>
            <h1>Accounts </h1>

            <div className={style.details_flex}>
              <div>
                <label>Accounts Registered</label>
                <h5>{profile.accountDetails.accountRegistred}</h5>
              </div>
              <div className={style.lastName}>
                <label>Ajo</label>
                <h5>{profile.accountDetails.activeUsersTypeInformation.app}</h5>
              </div>
            </div>

            <div className={style.details_flex}>
              <div>
                <label>Savings</label>
                <h5>
                  {profile.accountDetails.activeUsersTypeInformation.savings}
                </h5>
              </div>
              <div className={style.lastName}>
                <label className={style.phonenumber}>Loan</label>
                <h5>
                  {profile.accountDetails.activeUsersTypeInformation.loan}
                </h5>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="d-flex gap-3 p-2 mt-3">
              <Button className={style.AddnewButton}>Active Users</Button>
              <Button className={style.AddnewButton2}>Inactive Users</Button>
            </div> */}
            <div className={style.hideonmobile}>
              <DonutChart />
            </div>
          </div>
        </section>
        <div>
          <section className={style.container_details_Account}>
            <div className={style.inner_details_Account}>
              <h1>Customers </h1>

              <div className={style.details_flex}>
                <div>
                  <label>Number of Customers Registered</label>
                  <h5>
                    {
                      profile.accountDetails.ActiveCustomersInformation
                        .NumberofCustomersRegistered
                    }
                  </h5>
                </div>
                <div className={style.lastName}>
                  <label>Ajo</label>
                  <h5>
                    {
                      profile.accountDetails.ActiveCustomersInformation
                        .ActiveCustomers
                    }
                  </h5>
                </div>
              </div>

              <div className={style.details_flex}>
                <div>
                  <label>Savings</label>
                  <h5>
                    {
                      profile.accountDetails.ActiveCustomersInformation
                        .InactiveCustomers
                    }
                  </h5>
                </div>
              </div>
            </div>

            <div className={style.hideonmobile}>
              {/* <div className="d-flex gap-3 p-2 mt-3">
                <Button className={style.AddnewButton}>Active Customers</Button>
                <Button className={style.AddnewButton4}>
                  Inactive Customers
                </Button>
              </div> */}
              <div className={style.hideonmobile}>
                <CustomerDonut />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaffProfileCard;
