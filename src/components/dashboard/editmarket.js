import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Editmarket = () => {
  const { id } = useParams();

  const getmarketinfo = () => {
    var url = "http://localhost:1238/marketing/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((Info) => {
        pickSName(Info.name);
        pickType(Info.type);
        pickService(Info.service);
      });
  };
  useEffect(() => {
    getmarketinfo();
  }, [1]);
  var formstatus = true;

  let [snameerror, updateSNameError] = useState("");
  let [sname, pickSName] = useState("");

  let [typeerror, updateTypeError] = useState("");
  let [type, pickType] = useState("");

  let [serviceerror, updateServiceError] = useState("");
  let [service, pickService] = useState("");

  let [msg1, updateMsg1] = useState("");

  const saveMarket = () => {
    // Software Name Validation...........!
    if (sname == "") {
      formstatus = false;
      updateSNameError("Please enter Name**");
    } else if (sname.length < 3) {
      formstatus = false;
      updateSNameError("Character must be greater than 2");
    } else if (sname.length > 15) {
      formstatus = false;
      updateSNameError("Character must be less than 16");
    } else {
      updateSNameError("");
    }

    // Price Validation...........!
    if (type == "") {
      formstatus = false;
      updateTypeError("Please enter Type**");
    } else if (type.length < 1) {
      formstatus = false;
      updateTypeError("Price must be greater than 0");
    } else {
      updateTypeError("");
    }

    // Services Validation...........!
    if (service == "") {
      formstatus = false;
      updateServiceError("Please enter service");
    } else if (service.length < 4) {
      formstatus = false;
      updateServiceError("Character must be greater than 3");
    } else if (service.length > 20) {
      formstatus = false;
      updateServiceError("Character must be less than 21");
    } else {
      updateServiceError("");
    }

    if (formstatus == true) {
      var url = "http://localhost:1238/marketing/" + id;
      var data = { name: sname, type: type, service: service };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data),
      };
      fetch(url, postoption)
        .then((Response) => Response.json())
        .then((serRes) => {
          alert("saved");
          pickSName("");
          pickType("");
          pickService("");

          window.location.href = "#/marketing"; // to redirect after save
        });
    } else {
      updateMsg1("Invalid Input");
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-lg-5 offset-4">
          <div className="form bg-white shadow-lg rounded">
            <h3 className="text-center p-3 bg-primary rounded-top text-white fw-bold">
              <i className="fas fa-poll me-2 fs-3"></i>
              Edit Marketing
            </h3>

            <p className="text-danger text-center fst-italic">{msg1}</p>
            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Edit Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickSName(obj.target.value)}
                value={sname}
              />
              <i className="text-danger fst-italic">{snameerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Type <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickType(obj.target.value)}
                value={type}
              />
              <i className="text-danger fst-italic">{typeerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Services <i className="text-warning">*</i>
              </label>
              <textarea
                type="text"
                className="form-control"
                onChange={(obj) => pickService(obj.target.value)}
                value={service}
              ></textarea>
              <i className="text-danger fst-italic">{serviceerror}</i>
            </div>

            <div className="mt-3  text-center">
              <button
                className="btn btn-primary mb-3 fw-semibold"
                onClick={saveMarket}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editmarket;
