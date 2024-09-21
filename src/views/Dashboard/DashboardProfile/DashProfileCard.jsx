import React, { useContext } from "react";
import usericons from "../../Accounts/AccountIcons/femaleicons.svg";
import style from "../DashboardProfile/Dashprofile.module.css";
import { dashboardProfiles } from "./DashboardproData";
import { useParams } from "react-router-dom";
import elipice from "../../Staffs/icons/Ellipse.png";

import Button from "../../../component/ButtonComponents/Button";
import DonutChart from "../../Staffs/StaffProfile/Components/DonutAcoountChart/DonutChart";
import CustomerDonut from "../../Staffs/StaffProfile/Components/CustomerChart/CustomerDonut";
import UserStatus from "../../../component/UserStatus/UserStatus";
import { GlobalContext } from "../../../UseContext/ContextProvider";
const DashProfileCard = () => {
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

  const { id } = useParams();
  const profile = dashboardProfiles.find((profile) => profile);
  const { userstatus } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <div className={` p-1 ${style.full_container} mb-3`}>
        <div className={style.image_position}>
          <img src={elipice} />
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

          <div className={style.hideonmobile}>
            {/* <div className="d-flex gap-3 p-2 mt-2 ">
              <Button className={style.AddnewButton}>Active Customers</Button>
              <Button className={style.AddnewButton4}>
                Inactive Customers
              </Button>
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
                <div className={`${style.lastName} ${style.hide}`}>
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

            <div className="">
              <div className={`${style.lastName} ${style.showhide}`}>
                <label>Ajo</label>
                <h5>
                  {
                    profile.accountDetails.ActiveCustomersInformation
                      .ActiveCustomers
                  }
                </h5>
              </div>
              {/* <div className="d-flex gap-3 p-2 mt-2 ">
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
        <div className={style.EmailNotificationBox}>
          <div>
            <p>Email Notifications</p>
            <p>Recieve direct mail notifications</p>
          </div>
          <div className="form-check form-switch">
            <input
              className={`form-check-input ${style.customswitchwidth}`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            {/* <label class="form-check-label" for="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label> */}
          </div>
        </div>
        <div>
          <Button className={style.logoutButtton}>Logout</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashProfileCard;
