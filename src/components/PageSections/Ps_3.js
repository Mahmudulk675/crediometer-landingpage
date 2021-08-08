import React from "react";

const Ps_3 = () => {
  return (
    <div className="ps3 container about">
      <div className="ps3_wrapper">
        <div className="row container">
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <div className="img_div">
              <img
                style={{ height: "400px", borderRadius: "23px" }}
                className="img-fluid m-auto"
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 text-white d-flex d-flex justify-content-center align-items-center mb-5">
            <div className="col ms-3">
              <div className="col-12">
                <p className="fs-2">
                  Your business, your <br /> finances <br /> Own and control it!
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
  );
};

export default Ps_3;
