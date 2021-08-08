import React from "react";

const Ps_4 = () => {
  return (
    <div className="ps4 mt-5">
      <div className="ps1_wrapper container mb-3">
        <div className="row ">
          <div className="col-md-6 mb-3 d-flex d-flex align-items-center justify-content-center">
            <div className="col ms-3">
              <div className="ms-5">
                <div className="col-12">
                  <p className="fs-3 fw-bold">
                    Card solution for your <br /> business personal controlling{" "}
                    <br /> your card should be personal
                  </p>
                </div>
                <div className="col-12">
                  <button className="btn btn-danger ">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="img_div text-center">
              <img
                style={{ height: "350px" }}
                className="img-fluid m-auto rounded my-5"
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ps_4;
