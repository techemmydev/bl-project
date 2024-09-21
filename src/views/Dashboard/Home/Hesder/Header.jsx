import React from "react";
import style from "../Hesder/Header.module.css";
import iconsuser from "../../icons/user.svg";
import iconcalender from "../../icons/calender.png";
import iconcontact from "../../icons/contact.png";
import iconloan from "../../icons/loans.png";
const headerData = [
  { label: "Number of staffs", value: 128, icons: iconsuser },
  { label: "Number on leave", value: 12, icons: iconcalender },
  { label: "Number of customers", value: 490, icons: iconcontact },
  { label: "Loan Requests", value: 5, icons: iconloan },
];

const Header = () => {
  return (
    <div className={` mt-4 ${style.header}`}>
      {headerData.map((item, index) => (
        <div key={index} className={` ${style.header_content}`}>
          <div className={style.img_content}>
            <img src={item.icons} alt="" />
          </div>
          <div className={style.header_content_value}>
            <span> {item.label}</span>
            <span> {item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
