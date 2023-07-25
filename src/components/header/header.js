import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid ms-4">
          <a className="navbar-brand text-white">
            <i class="fa fa-headset"></i> NitorConnect
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-link text-white  "
            id="navbarNav"
          >
            <ul class="navbar-nav me-auto mb-2 mb-md-0 ">
              <Link
                to="/dashboard"
                className="nav-item px-3"
                style={{ textDecoration: "none" }}
              >
                <a className="nav-link text-white ">
                  <i class="fa fa-home"></i> Dashboard
                </a>
              </Link>

              <li class="nav-item">
                <a className="nav-link text-white">
                  <i class="fa fa-users"></i> Customer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white">
                  <i class="fa fa-suitcase"></i> Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white">
                  <i class="fa-solid fa-rupee-sign"></i> Billing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white">
                  <i class="fa fa-building"></i> Clients
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
