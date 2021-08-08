import React from "react";

const ModalComponent = () => {
  return (
    <div
      classNameName="modal"
      style={{
        position: "absolute",
        zIndex: "1",
        top: "60px",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        alignItems: "center",
      }}
    >
      <div style={{ borderRadius: "23px" }} className="container bg-white ">
        <div className="row">
          <div className="col-md-4">
            <li className="mt-2">
              <p className="fs-4 mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
            <li className="mt-2">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
            <li className="mt-2 mb-3">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
          </div>
          <div className="col-md-4">
            <li className="mt-2">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
            <li className="mt-2">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
          </div>
          <div className="col-md-4">
            <li className="mt-2">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
            <li className="mt-2">
              <p className="fs-4  mb-0">About Crediometer</p>
              <small>Our story and family</small>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
