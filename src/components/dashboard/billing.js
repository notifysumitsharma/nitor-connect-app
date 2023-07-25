import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Billing = () => {
  const [bill, updateBill] = useState([]);
  const [msg, updateMsg] = useState("");

  const getbillData = () => {
    fetch("http://localhost:1238/billing")
      .then((response) => response.json())
      .then((custData) => {
        updateBill(custData);
      });
  };
  useEffect(() => {
    getbillData();
  });

  const deleteBill = (id) => {
    var url = "http://localhost:1238/billing/" + id;
    var postoption = {
      method: "DELETE",
    };
    fetch(url, postoption)
      .then((response) => response.json())
      .then((servRes) => {
        updateMsg("Deleted Bill Successfully");
      });
  };

  let [keyword, updateKeyword] = useState("");

  // for pagination

  const PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(bill.length / PER_PAGE);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <Link to="/newbill" className="btn btn-primary">
            Add New
          </Link>
        </div>
        <div className="col-lg-8 text-end">
          <div className="btn-group ">
            <Link to="/dashboard" className="btn btn-danger">
              <i className="fa fa-home"></i> Dashboard
            </Link>
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
            <button className="btn btn-secondary">
              <i className="fa fa-power-off"></i> Logout
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="text-center text-primary">
            Total Bill : {bill.length}
          </h2>
          <div className="w-25">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(obj) => updateKeyword(obj.target.value)}
            ></input>
          </div>
          <p className="text-center  text-danger rounded p-2 mb-4 ">{msg}</p>
          <table className="table table-bordered p-3 shadow-lg rounded">
            <thead>
              <tr>
                <th>ID</th>
                <th>Bill-Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bill
                .filter((post) => {
                  if (
                    post.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    post.amount.toString().includes(keyword) ||
                    post.status.includes(keyword)
                  ) {
                    return post;
                  }
                })
                .slice(offset, offset + PER_PAGE)
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.amount}</td>
                      <td>{data.status}</td>
                      <td>
                        <Link
                          to={`/editbill/${data.id}`}
                          className="btn btn-warning"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={deleteBill.bind(this, data.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="mb-4 mt-4 text-center">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination  justify-content-center"}
              pageClassName={"page-item "}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
