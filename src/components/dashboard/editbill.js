import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const EditBill = () => {
  const { id } = useParams();
  let formstatus = true;

  const getbillInfo = () => {
    var url = "http://localhost:1238/billing/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((Info) => {
        pickName(Info.name);
        pickAmount(Info.amount);
        pickStatus(Info.status);
      });
  };
  useEffect(() => {
    getbillInfo();
  }, [1]);
  let [statusmsg, updateStatus] = useState("");

  let [nameerror, updateNameError] = useState("");
  let [name, pickName] = useState("");

  let [amounterror, updateAmountError] = useState("");
  let [bamount, pickAmount] = useState("");

  let [statuserror, updateStatusError] = useState("");
  let [bstatus, pickStatus] = useState("");

  const save = () => {
    // name validation
    if (name == "") {
      formstatus = false;
      updateNameError("Invalid Name");
    } else {
      updateNameError("");
    }
    // Age validation
    if (bamount == "") {
      formstatus = false;
      updateAmountError("Invalid Amount");
    } else {
      updateAmountError("");
    }
    // City validation
    if (bstatus == "") {
      formstatus = false;
      updateStatusError("Invalid Status");
    } else {
      updateStatusError("");
    }
    if (formstatus == true) {
      var url = "http://localhost:1238/billing/" + id;
      var data = {
        name: name,
        amount: bamount,
        status: bstatus,
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
          swal("Are you sure you want to do this?", {
            buttons: ["No!", "Yes!"],
          })
            .then(function (result) {
              if (result.value == true) {
                return true;
              }
            })
            .then(function () {
              window.location.href = "#/billing";
            });
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
              <i className="fa fa-money-bill me-2 fs-3"></i>
              Edit Billing
            </h3>
            <p className="text-danger text-center fst-italic">{statusmsg}</p>

            <div className="mt-3 ms-3 me-3 mb-2">
              <label>
                Bill Name <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickName(e.target.value)}
                value={name}
              />
              <i className="text-danger fst-italic">{nameerror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Amount <i className="text-warning">*</i>
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => pickAmount(e.target.value)}
                value={bamount}
              />
              <i className="text-danger fst-italic">{amounterror}</i>
            </div>
            <div className="ms-3 me-3 mb-2">
              <label>
                Status <i className="text-warning">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickStatus(e.target.value)}
                value={bstatus}
              ></input>
              <i className="text-danger fst-italic">{statuserror}</i>
            </div>

            <div className="mt-3  text-center">
              <button
                className="btn btn-primary mb-3 fw-semibold"
                onClick={save}
              >
                Save Bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditBill;
