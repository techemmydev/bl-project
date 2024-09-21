import React from "react";
import style from "../EditButton/editbuttoncom.module.css";
import { CiEdit } from "react-icons/ci";
const EditButtonComponents = ({ onclick }) => {
  return (
    <div>
      <button type="button" className={`btn  ${style.bbb}`} onClick={onclick}>
        <CiEdit /> <span>Edit</span>
      </button>
    </div>
  );
};

export default EditButtonComponents;
