import React, { useState, useEffect } from "react";

const Newsoft = () => {
  var formstatus = true;

  let [nameerror, updateNameError] = useState("");
  let [name, pickName] = useState("");

  let [spriceerror, updatePriceError] = useState("");
  let [sprice, pickSPrice] = useState("");

  let [serviceerror, updateServiceError] = useState("");
  let [service, pickService] = useState("");

  let [msg, updateMsg] = useState("");

  const savesoftware = () => {
    // Software Name Validation...........!
    if (name == "") {
      formstatus = false;
      updateNameError("Please enter Name**");
    } else {
      updateNameError("");
    }

    // Price Validation...........!
    if (sprice == "") {
      formstatus = false;
      updatePriceError("Please enter Price**");
    } else {
      updatePriceError("");
    }

    // Services Validation...........!
    if (service == "") {
      formstatus = false;
      updateServiceError("Please enter Service");
    } else {
      updateServiceError("");
    }

    if (formstatus == true) {
      var url = "http://localhost:1238/software";
      var data = { name: name, price: sprice, service: service };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };
      fetch(url, postoption)
        .then((Response) => Response.json())
        .then((serRes) => {
          pickName("");
          pickSPrice("");
          pickService("");

          window.location.href = "#/software"; // to redirect after save
        });
    } else {
      updateMsg("Invalid Input");
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-lg-5 offset-4">
          <div className="form bg-white shadow-lg rounded">
            <h3 className="text-center p-3 bg-primary rounded-top text-white fw-bold">
              <i className="fa fa-business-time me-2 fs-3"></i>
              Add New Software
            </h3>

            <p className="text-danger text-center fst-italic">{msg}</p>

            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Software Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickName(obj.target.value)}
                value={name}
              />
              <i className="text-danger fst-italic">{nameerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Price <i className="text-warning">*</i>
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(obj) => pickSPrice(obj.target.value)}
                value={sprice}
              />
              <i className="text-danger fst-italic">{spriceerror}</i>
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
                onClick={savesoftware}
              >
                Save Software
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsoft;
