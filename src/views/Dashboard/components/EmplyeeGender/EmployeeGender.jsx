import React from "react";
import women from "../../icons/map_female.png";
import men from "../../icons/map_male.png";
import style from "../EmplyeeGender/gender.module.css";

const GenderCard = () => {
  return (
    <div className={`card ${style.genderCard}`}>
      <div className="card-body ">
        <h5 className="">Employee Gender</h5>
        <div className="row">
          <div className="col-6 text-center mt-3">
            <h6 className={style.percentage} style={{ color: "#FF69B4" }}>
              37.5%
            </h6>
            <img src={women} alt="Women" className={style.genderIcon} />

            <p className={style.genderCount} style={{ color: "#FF69B4" }}>
              48
            </p>
            <p>Women</p>
          </div>
          <div className="col-6 text-center  mt-3">
            <h6 className={style.percentage} style={{ color: "#1E90FF" }}>
              62.5%
            </h6>
            <img src={men} alt="Men" className={style.genderIcon} />

            <p className={style.genderCount} style={{ color: "#1E90FF" }}>
              80
            </p>
            <p>Men</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderCard;
