import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyDashboard2 = () => {
  let [soft, updateSoft] = useState([]);
  let [mark, updateMark] = useState([]);
  let [cust, updateCust] = useState([]);
  let [bill, updateBill] = useState([]);

  const getdata = () => {
    fetch("http://localhost:1238/software")
      .then((response) => response.json())
      .then((softArray) => {
        updateSoft(softArray);
      });
  };
  const getdata2 = () => {
    fetch("http://localhost:1238/marketing")
      .then((response) => response.json())
      .then((softArray) => {
        updateMark(softArray);
      });
  };
  const getdata3 = () => {
    fetch("http://localhost:1238/customer")
      .then((response) => response.json())
      .then((softArray) => {
        updateCust(softArray);
      });
  };
  const getdata4 = () => {
    fetch("http://localhost:1238/billing")
      .then((response) => response.json())
      .then((softArray) => {
        updateBill(softArray);
      });
  };
  useEffect(() => {
    getdata();
    getdata2();
    getdata3();
    getdata4();
  }, [1]);

  const logoutHandle = () => {
    alert("logout");
    localStorage.clear();
    window.location.href = "http://localhost:3000/#/login";
    window.location.reload();
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row mb-5">
          <div className="col-lg-4 text-center">
            <h1 className="text-primary">
              <i className="fa fa-home"></i> Dashboard
            </h1>
          </div>
          <div className="col-lg-8 text-end">
            <div className="btn-group">
              <button className="btn btn-danger">
                <i className="fa fa-home"></i> Dashboard
              </button>
              <button className="btn btn-info">
                <i className="fa fa-suitcase"></i> Product
              </button>
              <button className="btn btn-success">
                <i className="fa fa-users"></i> Customer
              </button>
              <button className="btn btn-primary">
                <i className="fa fa-inr"></i> Billing
              </button>
              <button className="btn btn-warning">
                <i className="fa fa-building"></i> Vendor
              </button>
              <button className="btn btn-secondary" onClick={logoutHandle}>
                <i className="fa fa-power-off"></i> Logout
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="text-info">Dashboard</h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-3 mb-4">
            <Link
              to="/software"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              <div className="p-4 bg-info text-white rounded shadow-lg">
                <i className="fa fa-desktop fa-4x mb-3"></i>
                <h4>Software</h4>
                <p>{soft.length}</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 mb-4">
            <Link
              to="/marketing"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              <div className="p-4 bg-info text-white rounded shadow-lg">
                <i className="fa fa-suitcase fa-4x mb-3"></i>
                <h4>Marketing</h4>
                <p>{mark.length}</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 mb-4">
            <Link
              to="/customer"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              <div className="p-4 bg-info text-white rounded shadow-lg">
                <i className="fa fa-users fa-4x mb-3"></i>
                <h4>Customer</h4>
                <p>{cust.length}</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 mb-4">
            <Link
              to="/billing"
              style={{ textDecoration: "none" }}
              className="text-white"
            >
              <div className="p-4 bg-info text-white rounded shadow-lg">
                <i className="fa fa-inr fa-4x mb-3"></i>
                <h4>Billing</h4>
                <p>{bill.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section className="p-4 text-center myfooter border-top border-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-start">
              <p> Copyright@yourwebsite.com 2012 - 2025</p>
            </div>
            <div className="col-lg-6 text-end">
              <p>
                <i className="fab fa-facebook fa-lg m-2"></i>
                <i className="fab fa-twitter fa-lg m-2"></i>
                <i className="fab fa-linkedin fa-lg m-2"></i>
                <i className="fab fa-instagram fa-lg m-2"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyDashboard2;
