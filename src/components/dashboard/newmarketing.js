import React, { useState, useEffect } from "react";

const Newmarket = () => {
  var formstatus = true;

  let [pnameerror, updatePNameError] = useState("");
  let [pname, pickPName] = useState("");

  let [typeerror, updateTypeError] = useState("");
  let [mtype, pickType] = useState("");

  let [pqutyerror, updateQutyError] = useState("");
  let [pquty, pickPQuty] = useState("");

  let [msg, updateMsg] = useState("");
  let [msg1, updateMsg1] = useState("");

  const savesoftware = () => {
    // Software Name Validation...........!
    if (pname == "") {
      formstatus = false;
      updatePNameError("Please enter Name**");
    } else if (pname.length < 3) {
      formstatus = false;
      updatePNameError("Character must be greater than 2");
    } else if (pname.length > 15) {
      formstatus = false;
      updatePNameError("Character must be less than 16");
    } else {
      updatePNameError("");
    }

    // Price Validation...........!
    if (mtype == "") {
      formstatus = false;
      updateTypeError("Please enter Type**");
    } else if (mtype.length < 1) {
      formstatus = false;
      updateTypeError("Price must be greater than 0");
    } else {
      updateTypeError("");
    }

    // Services Validation...........!
    if (pquty == "") {
      formstatus = false;
      updateQutyError("Please enter Service");
    } else if (pquty.length < 4) {
      formstatus = false;
      updateQutyError("Character must be greater than 3");
    } else if (pquty.length > 20) {
      formstatus = false;
      updateQutyError("Character must be less than 21");
    } else {
      updateQutyError("");
    }

    if (formstatus == true) {
      var url = "http://localhost:1238/marketing";
      var data = { name: pname, type: mtype, service: pquty };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };
      fetch(url, postoption)
        .then((Response) => Response.json())
        .then((serRes) => {
          alert("saved");
          pickPName("");
          pickType("");
          pickPQuty("");
          updateMsg(`${pname} Added Successfull...!!`);
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
              Add New Marketing
            </h3>
            <p className="text-primary text-center fst-italic">{msg}</p>
            <p className="text-danger text-center fst-italic">{msg1}</p>
            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Market Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickPName(obj.target.value)}
                value={pname}
              />
              <i className="text-danger fst-italic">{pnameerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Type <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickType(obj.target.value)}
                value={mtype}
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
                onChange={(obj) => pickPQuty(obj.target.value)}
                value={pquty}
              ></textarea>
              <i className="text-danger fst-italic">{pqutyerror}</i>
            </div>
            <div class="form-check ms-3">
              <input class="form-check-input" type="checkbox" />
              <p>I Agree Your Terms & Condition</p>
            </div>
            <div className="mt-3  text-center">
              <button
                className="btn btn-primary mb-3 fw-semibold"
                onClick={savesoftware}
              >
                Save Market
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newmarket;
