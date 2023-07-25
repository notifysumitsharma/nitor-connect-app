import React, { useState } from "react";

const NewCustomer = () => {
  var formstatus = true;

  let [statusmsg, updateStatus] = useState("");

  let [nameerror, updateNameError] = useState("");
  let [cname, pickName] = useState("");

  let [ageerror, updateAgeError] = useState("");
  let [cage, pickAge] = useState("");

  let [cityerror, updateCityError] = useState("");
  let [ccity, pickCity] = useState("");

  const saveCustomer = () => {
    // name validation
    if (cname == "") {
      formstatus = false;
      updateNameError("Invalid Name");
    } else {
      updateNameError("");
    }
    // Age validation
    if (cage == "") {
      formstatus = false;
      updateAgeError("Invalid Age");
    } else {
      updateAgeError("");
    }
    // City validation
    if (ccity == "") {
      formstatus = false;
      updateCityError("Invalid City");
    } else {
      updateAgeError("");
    }

    if (formstatus == true) {
      var url = "http://localhost:1238/customer";
      var customerInfo = {
        name: cname,
        age: cage,
        city: ccity,
      };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(customerInfo),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          pickName("");
          pickAge("");
          pickCity("");
          window.location.href = "#/customer";
        });
    } else {
      updateStatus("Invalid Input");
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-lg-5 offset-4">
          <div className="form bg-white shadow-lg rounded">
            <h3 className="text-center p-3 bg-primary rounded-top text-white fw-bold">
              <i className="fa fa-user me-2 fs-3"></i> Add New Customer
            </h3>
            <p className="text-danger text-center fst-italic">{statusmsg}</p>

            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Customer Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickName(obj.target.value)}
                value={cname}
              />
              <i className="text-danger fst-italic">{nameerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Age <i className="text-warning">*</i>
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(obj) => pickAge(obj.target.value)}
                value={cage}
              />
              <i className="text-danger fst-italic">{ageerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                City <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickCity(obj.target.value)}
                value={ccity}
              ></input>
              <i className="text-danger fst-italic">{cityerror}</i>
            </div>

            <div className="mt-3  text-center">
              <button
                className="btn btn-primary mb-3 fw-semibold"
                onClick={saveCustomer}
              >
                Save Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewCustomer;
