import React from "react";
import "./Landing.css";
import LandingSVG from "./LandingSVG";
const Landing = () => {
  return (
    <>
      {/* <img src="./images/easyStayLogo"  alt="" /> */}
      <div className="deathcontainer">
        <div className="deathimg-container">
          <LandingSVG />
        </div>
        <div className="deathdesc-container">
          <div className="deathtitle">
            <h2>A Beautiful stay for you and your family.</h2>
          </div>
          <div className="deathdesc">
            <span>
            We provide easy one-click booking of hotels, and lounges available in different places of the world. 
            </span>
          </div>
          <div className="deathbtn">
            <a style={{ textDecoration: "none" }} href="/book">Book a Room</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
