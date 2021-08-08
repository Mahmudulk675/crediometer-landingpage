import React from "react";
import "./Sections.css";

const Ps_1 = () => {
  return (
    <div className="about container my-3">
      <div className="about_wrapper">
        <div className="container">
          <div className="row ms-2">
            <div className="col-md-6 text-white">
              <div className="row my-5 ">
                <div className="col-6">
                  <img
                    className="img-fluid rounded"
                    src="https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt=""
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="row gy-4">
                    <img
                      className="img-fluid rounded"
                      src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
                      alt=""
                    />
                    <img
                      className="img-fluid rounded"
                      src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80w=334&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-white d-flex d-flex align-items-center mb-5">
              <div className="col ms-3">
                <div className="col-12">
                  <p className="fs-2">
                    Your business, your <br /> finances <br /> Own and control
                    it!
                  </p>
                </div>
                <div className="col-12">
                  <button className="btn btn-danger">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ps_1;
