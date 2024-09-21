import React, { useState } from "react";
import style from "../AddCustomer/AddCustomer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserIconWithAdd from "../../Staffs/Components/UserIconWithAdd";
import Button from "../../../component/ButtonComponents/Button";

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter Phone Number",
  },
  { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
  { id: "region", label: "Region", type: "text", placeholder: "Enter Region" },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter Address",
  },
  {
    id: "gender",
    label: "Gender",
    type: "select",
    options: ["Enter Gender", "female", "male", "others"],
  },

  { id: "businessStartDate", label: "Business Start Date", type: "date" },
];

const currentYear = new Date().getFullYear();
const startYear = 2000;

const years = [...Array(currentYear - startYear + 1).keys()].map(
  (i) => i + startYear
);

const AddCustomerForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Reset the form values
    setFormValues({});
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className={` ${style.formbox}`}>
        <div className="row mb-3 ">
          <div className={` ${style.addbox}`}>
            <UserIconWithAdd />
          </div>
        </div>
        <div className="row">
          {fields.map((field) => (
            <div key={field.id} className="col-md-6 mb-3">
              <label
                htmlFor={field.id}
                className={`form-label ${style.formLabel}`}
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  className={`form-select ${style.formSelct}`}
                  onChange={handleChange}
                  value={formValues[field.id] || ""} // Ensure value is controlled
                >
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.id === "businessStartDate" ? (
                <div className="d-flex">
                  <select
                    className={`form-control me-2 ${style.drop}`}
                    id="day"
                    value={formValues.day || ""} // Ensure value is controlled
                    onChange={handleChange}
                  >
                    <option value="">Date</option>
                    {[...Array(31).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className={`form-control me-2 ${style.drop}`}
                    id="month"
                    value={formValues.month || ""} // Ensure value is controlled
                    onChange={handleChange}
                  >
                    <option value="">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((monthName, i) => (
                      <option key={i + 1} value={i + 1}>
                        {monthName}
                      </option>
                    ))}
                  </select>
                  <select
                    className={`form-control ${style.drop}`}
                    id="year"
                    value={formValues.year || ""} // Ensure value is controlled
                    onChange={handleChange}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className={`form-control ${style.inputWidth}`}
                  onChange={handleChange}
                  value={formValues[field.id] || ""} // Ensure value is controlled
                />
              )}
            </div>
          ))}
        </div>
        <div className={`d-flex justify-content-center mt-5 gap-2`}>
          <Button className={`btn btn-primary mx-2 ${style.mybutton1}`}>
            Save
          </Button>
          <Button className={`btn btn-primary mx-2 ${style.mybutton2}`}>
            Save & Continue
          </Button>
          <Button className={`btn btn-primary mx-2 ${style.mybutton3}`}>
            Cancel
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddCustomerForm;
