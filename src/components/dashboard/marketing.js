import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Marketing = () => {
  let [market, updateMarket] = useState([]);
  let [msg, updateMsg] = useState([]);

  const getMarketInfo = () => {
    fetch("http://localhost:1238/marketing")
      .then((response) => response.json())
      .then((softArray) => {
        updateMarket(softArray);
      });
  };
  useEffect(() => {
    getMarketInfo();
  }, [1]);

  const deleteMarketing = (id) => {
    var url = "http://localhost:1238/marketing/" + id;
    var postoption = {
      method: "DELETE",
    };
    fetch(url, postoption)
      .then((response) => response.json())
      .then((servRes) => {
        updateMsg(" Deleted Successfully");
        getMarketInfo();
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
  const pageCount = Math.ceil(market.length / PER_PAGE);

  return (
    <div className="container mt-4">
      <div className="row mt-5 mb-5">
        <div className="col-lg-4">
          <Link to="/newmarket" className="btn btn-primary ">
            Add New
          </Link>
        </div>
        <div className="col-lg-8 text-end">
          <div className="btn-group">
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
          Marketing List : {market.length}{" "}
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
                <th>Marketing Name</th>
                <th>Type</th>
                <th>Services</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {market
                .filter((post) => {
                  if (
                    post.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    post.type.toString().includes(keyword) ||
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
                      <td>{data.type}</td>
                      <td>{data.service}</td>
                      <td>
                        <Link
                          to={`/editmarketing/${data.id}`}
                          className="btn btn-warning"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={deleteMarketing.bind(this, data.id)}
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

export default Marketing;
