import React from "react";
import ClientGrid from "./ClientGrid";


const ComapnyDes = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "2rem",
          letterSpacing: "-1px",
        }}
      >
        What We Do ?
      </h3>
      <div className="service_description_container">
        <div className="service_des">
          <>
            We offer general solutions to the technological problems faced by
            the people and try to make their life a bit less complicated. We do
            our job in the best way possible so that you don’t have to worry
            about those things ever again
          </>
        </div>
        <div className="service_list">

        </div>

        <div className="client_description" style={{marginTop:"3rem"}}>
        <h3
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "2rem",
          letterSpacing: "-1px",
        }}
      >
       Clients
      </h3>
      <div className="client_des_grid" >
        <ClientGrid/>
      </div>
        </div>
      </div>
    </>
  );
};

export default ComapnyDes;
