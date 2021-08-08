import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_page ">
      <Nav />
      <div className="intro_wrapper d-flex align-items-center h-100vh">
        <div className="intro">
          <h1 className="text-white text-lg ms-5">
            Payment built for
            <br />
            growing businesses
          </h1>
          <div className="home_btn">
            <button className="btn btn-danger ms-5 mt-3">
              Get started as merchant
            </button>
            <button className="btn btn-danger ms-5 mt-3">
              Get started as user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
