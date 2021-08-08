import React, { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
import ModalComponentService from "../Modal/ModalComponentService";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedService, setIsClickedService] = useState(false);

  // const handleClick = (option, differentOption) => {
  //   setIsClicked(!option);
  //   if (differentOption) {
  //     setIsClicked(!differentOption);
  //   }
  // };

  return (
    <div className="" style={{ position: "relative" }}>
      <nav class="navbar navbar ">
        <div class="container-fluid flex-row-reverse">
          <div className=" ">
            <ul className="d-flex">
              <li
                onClick={() => {
                  setIsClicked(!isClicked);
                  if (isClickedService) {
                    setIsClickedService(false);
                  }
                }}
                style={{ listStyle: "none" }}
                className="navbar fs-4 text-white"
              >
                What you get
              </li>
              <li
                onClick={() => {
                  setIsClickedService(!isClickedService);
                  if (isClicked) {
                    setIsClicked(false);
                  }
                }}
                style={{ listStyle: "none" }}
                className="navbar fs-4 px-5 text-white"
              >
                Company
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isClicked ? <ModalComponent /> : null}

      {isClickedService ? <ModalComponentService /> : null}
    </div>
  );
};

export default Nav;
