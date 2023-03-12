import React from "react";
import { BsPlayFill } from "react-icons/bs";

const Banner = () => {
    let iconStyles = { color: "#000000", fontSize: "3.5em",textAligin:"center" };
  return (
    <>
      <div className="first_banner">
        <div className="first_banner_first_heading">
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "0.8rem",
              letterSpacing: "8px",
              color: "grey",
              marginTop: "0.5rem",
            }}
          >
            Goal
          </h3>
        </div>
        <div className="first_banner_second_heading">
          <h3>Bringing the Golden Age Back</h3>
        </div>
        <div
          className="first_banner_third_heading"
          style={{ marginTop: "1.7rem" }}
        >
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "8px",
              color: "grey",
            }}
          >
            Vision
          </h3>
          <div className="first_banner_third_heading-2">
            <h3>Build technology fast </h3>
          </div>
        </div>
        <div className="first_banner_fourth_heading">
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "8px",
              color: "grey",
            }}
          >
            mission
          </h3>
          <div className="first_banner_fourth_heading-2">
            <h3>1000 Innovation and Invention </h3>
          </div>
          <div className="first_banner_playbutton">
            <BsPlayFill  style={iconStyles}/>
          </div>
        </div>
      </div>
      <div className="second_banner">
        
      </div>
    </>
  );
};

export default Banner;
