import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Software = () => {
  let [software, updateSoftware] = useState([]);
  let [msg, updateMsg] = useState([]);

  const getSoftware = () => {
    fetch("http://localhost:1238/software")
      .then((response) => response.json())
      .then((dataSoft) => {
        updateSoftware(dataSoft);
      });
  };
  useEffect(() => {
    getSoftware();
  }, [1]);

  const deleteSoftware = (id) => {
    var url = "http://localhost:1238/software/" + id;
    var postoption = {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    };
    fetch(url, postoption)
      .then((response) => response.json())
      .then((servRes) => {
        updateMsg(" Software Deleted Successfully");
        getSoftware();
      });
  };

  let [keyword, updateKeyword] = useState("");

  // for pagination

  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(software.length / PER_PAGE);

  return (
    <div className="container mt-4">
      <div className="row mt-5 mb-5">
        <div className="col-lg-4">
          <Link to="/newsoft" className="btn btn-primary ">
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

      <div className="row">
        <h2 className="text-center text-primary">
          Software List : {software.length}{" "}
        </h2>
        <div className="w-25 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(obj) => updateKeyword(obj.target.value)}
          ></input>
        </div>
        <p className="text-center  text-danger rounded p-2 mb-4 ">{msg}</p>
        <div className="col-lg-12">
          <table className="table table-bordered p-3 shadow-lg rounded">
            <thead>
              <tr>
                <th>ID</th>
                <th>Software Name</th>
                <th>Price</th>
                <th>Services</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {software
                .filter((post) => {
                  if (
                    post.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    post.price.toString().includes(keyword) ||
                    post.service.includes(keyword)
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
                      <td>{data.price}</td>
                      <td>{data.service}</td>
                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/editsoftware/${data.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={deleteSoftware.bind(this, data.id)}
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

export default Software;
