import React from "react";
import Header from "../header/header";

const MyDashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-lg-12 text-center">
          <h1 className="text-center text-primary">Dashboard</h1>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-info ">
            <i class="fa fa-desktop fa-5x text-white"></i>
            <h4 className=" text-white mt-2">
              Software Service
              <br />9
            </h4>
          </div>
        </div>

        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-warning ">
            <i class="fa fa-headset fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              Customer Service
              <br />7
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-success">
            <i class="fa fa-suitcase fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              Product Design
              <br />4
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-primary ">
            <i class="fa fa-search fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              SEO Service <br />8
            </h4>
          </div>
        </div>
      </div>
      <div className="row mb-4 text-center">
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-secondary ">
            <i class="fa fa-users fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              User Management
              <br />5
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-danger ">
            <i class="fa-solid fa-rupee-sign fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              Billing & Invoice
              <br />7
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-light ">
            <i class="fa-solid fa-pen-to-square fa-5x text-primary "></i>
            <h4 className="text-primary  mt-2">
              Content Writing
              <br />5
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="p-4 shadow-lg rounded bg-info ">
            <i class="fa fa-building fa-5x text-white"></i>
            <h4 className="text-white mt-2">
              Client Management
              <br />4
            </h4>
          </div>
        </div>
      </div>
    </div>

    // without bootstrap

    // <div>
    //   <h1 className="text-center mt-4 text-primary">Dashboard</h1>
    //   <div id="mygrid" className="text-center">
    //     <div className="user bg-info text-light">
    //       <i class="fa fa-desktop fa-4x"></i>
    //       <h4>Software Service</h4>
    //       <h4>9</h4>
    //     </div>
    //     <div className="user bg-warning text-light">
    //       <i class="fa fa-headset fa-4x"></i>
    //       <h4>Customer Service</h4>
    //       <h4>7</h4>
    //     </div>
    //     <div className="user bg-success text-light">
    //       <i class="fa fa-suitcase fa-4x"></i>
    //       <h4>Product Design</h4>
    //       <h4>4</h4>
    //     </div>
    //     <div className="user bg-primary text-light">
    //       <i class="fa fa-search fa-4x"></i>
    //       <h4>SEO Service</h4>
    //       <h4>8</h4>
    //     </div>
    //     <div className="user bg-secondary text-light">
    //       <i class="fa fa-users fa-4x"></i>
    //       <h4>User Mangagement</h4>
    //       <h4>5</h4>
    //     </div>
    //     <div className="user bg-danger text-light">
    //       <i class="fa-solid fa-rupee-sign fa-4x"></i>
    //       <h4>Billing & Invoice</h4>
    //       <h4>7</h4>
    //     </div>
    //     <div className="user bg-light text-primary shadow-lg bg-white rounded">
    //       <i class="fa-solid fa-pen-to-square fa-4x"></i>
    //       <h4>Content Writing</h4>
    //       <h4>5</h4>
    //     </div>
    //     <div className="user bg-info text-light">
    //       <i class="fa fa-building fa-4x"></i>
    //       <h4>Client Mangagement</h4>
    //       <h4>4</h4>
    //     </div>
    //   </div>
    // </div>
  );
};
export default MyDashboard;
