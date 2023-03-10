import React from "react";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-1">
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2.2rem",
              letterSpacing: "1px",
            }}
          >
            Who We Are ?
          </h3>
          <div className="div1">
            When Ambition Meets Opportunity, Anything is Possible.
          </div>
          <div className="div2">
            Autrob Technologies runs critical systems with the latest technology
            innovations to deliver better outcomes and new levels of
            performance, competitiveness and experiences for our customers.
          </div>
        </div>
        <div className="col-2">
          <img src="assests/image/about 1.png" alt=""></img>
        </div>
      </div>
    </>
  );
};

export default About;
