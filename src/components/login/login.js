import React, { useState } from "react";

const Mylogin = () => {
  let [email, pickEmail] = useState("");
  let [password, pickPassword] = useState("");
  let [msg, updateMsg] = useState("");

  const loginHandle = () => {
    if (email == "" || password == "") {
      updateMsg(" please enter login details!");
    } else {
      alert(" please wait processing");
      updateMsg(" processing");

      let url =
        "http://localhost:1238/account?email=" +
        email +
        "&password=" +
        password;
      fetch(url)
        .then((response) => response.json())
        .then((userinfo) => {
          if (userinfo.length == 0) {
            updateMsg(" invalid or not exist");
          } else {
            updateMsg(" success !! .. wait redirect");
            localStorage.setItem("fullname", userinfo[0].name);
            localStorage.setItem("user id", userinfo[0].id);
            window.location.href = "http://localhost:3000/#/dashboard";
            window.location.reload();
          }
        });
    }
  };
  return (
    <>
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-lg-4 offset-4">
            <div className="border rounded">
              <p>{msg}</p>
              <h4 className="bg-primary text-light p-4 ">
                <i class="fa fa-lock"></i> Login
              </h4>
              <div className="   p-3">
                <label>e-mail id</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => pickEmail(e.target.value)}
                ></input>
              </div>
              <div className="  p-3">
                <label>password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => pickPassword(e.target.value)}
                ></input>
              </div>
              <div className="bg-light border-top p-2 text-center ">
                <button className="btn btn-danger btn-sm" onClick={loginHandle}>
                  Login{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-primary p-3 text-center text-white">
        <div className="bg-primary text-center text-light">
          <h1>Help Line - +91 0000000000</h1>
          <marquee behavior="alternate">
            e-Mail : support@nitorconnect.com, Office Address - 6810 N Lakewood
            Ave Chicago IL - 60626
          </marquee>
        </div>
      </section>
      <section class="bg-primary p-4 text-center text-white">
        <div className="bg-primary text-center text-light"></div>
      </section>
      <footer class="p-5 bg-dark text-white fixed-bottom">
        <div class="container">
          <div class="row text-center">
            <p>Nitorconnect @2022 to 2025 </p>
            <p>
              <i class="fab fa-facebook fa-2x m-2"></i>
              <i class="fab fa-twitter fa-2x m-2"></i>
              <i class="fab fa-instagram fa-2x m-2"></i>
              <i class="fab fa-linkedin fa-2x m-2"></i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Mylogin;
