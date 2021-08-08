import React from "react";

const Ps_2 = () => {
  return (
    <div className="Ps1 container my-5">
      <div className="ps1_wrapper">
        <div className="row ">
          <div className="col-md-7 mb-3 d-flex d-flex align-items-center justify-content-center">
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
          <div className="col-md-5">
            <img
              style={{ height: "400px" }}
              className="img-fluid m-auto rounded"
              src="https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ps_2;
