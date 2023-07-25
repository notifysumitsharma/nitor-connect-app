import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  let formstatus = true;

  const getcustomerInfo = () => {
    var url = "http://localhost:1238/customer/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((Info) => {
        pickName(Info.name);
        pickAge(Info.age);
        pickCity(Info.city);
      });
  };
  useEffect(() => {
    getcustomerInfo();
  }, [1]);
  let [statusmsg, updateStatus] = useState("");

  let [nameerror, updateNameError] = useState("");
  let [cname, pickName] = useState("");

  let [ageerror, updateAgeError] = useState("");
  let [cage, pickAge] = useState("");

  let [cityerror, updateCityError] = useState("");
  let [ccity, pickCity] = useState("");

  const save = () => {
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
      updateCityError("");
    }
    if (formstatus == true) {
      var url = "http://localhost:1238/customer/" + id;
      var data = {
        name: cname,
        age: cage,
        city: ccity,
      };
      var postoption = {
        headers: { "Content-type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          updateStatus("Edited Successfully");
          window.location.href = "#/customer";
        });
    } else {
      updateStatus("Invalid Inputs");
    }
  };
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-lg-5 offset-4">
          <div className="form bg-white shadow-lg rounded">
            <h3 className="text-center p-3 bg-primary rounded-top text-white fw-bold">
              <i className="fa fa-user me-2 fs-3"></i> Edit Customer
            </h3>
            <p className="text-danger text-center fst-italic">{statusmsg}</p>

            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Customer Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickName(e.target.value)}
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
                onChange={(e) => pickAge(e.target.value)}
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
                onChange={(e) => pickCity(e.target.value)}
                value={ccity}
              ></input>
              <i className="text-danger fst-italic">{cityerror}</i>
            </div>

            <div className="mt-3  text-center">
              <button
                className="btn btn-primary mb-3 fw-semibold"
                onClick={save}
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
export default EditCustomer;
