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
          <div className="main_container">
            <div className="dot">
            </div>
            <div className="dotted dotted-basic"></div>

            <div
              className="service_list_des"
              style={{ fontFamily: "Poppins", lineHeight: "32px" }}
            >
              <span style={{ fontSize: "1rem", fontWeight: "bolder" }}>
              <h1 >
                Idea & Concept -
              </h1>
              </span>
              
              <span style={{ fontSize: "1rem", lineHeight: "32px" }}>
                Try to identify and validate the best, advanced, and futuristic
                idea.
              </span>
            </div>
          </div>
          <div className="main_container">
            <div className="dot-2">
            </div>
            <div className="dotted-2 dotted-basic"></div>

            <div
              className="service_list_des"
              style={{ fontFamily: "Poppins", lineHeight: "32px" }}
            >
              <h1 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                Research -
              </h1>
             
              <span style={{ fontSize: "1rem", lineHeight: "32px" }}>
                We research technologies with intelligent and data-driven
                automation systems.
              </span>
            </div>
          </div>
          <div className="main_container">
            <div className="dot-3">
            </div>
            <div className="dotted-3 dotted-basic"></div>

            <div
              className="service_list_des"
              style={{ fontFamily: "Poppins", lineHeight: "32px" }}
            >
              <h1 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
                Design & Development -
              </h1>
             
              <span style={{ fontSize: "1rem", lineHeight: "32px" }}>
                Evaluate the new technologies to enhance precision and operate
                well enough.
              </span>
            </div>
          </div>
          <div className="main_container">
            <div className="dot-4">
            </div>
            <div className="dotted-4 dotted-basic"></div>

            <div
              className="service_list_des"
              style={{ fontFamily: "Poppins", lineHeight: "32px" }}
            >
              <h1 style={{ fontSize: "1rem", fontWeight: "bolder" }}>Scale  - </h1>
             
              <span style={{ fontSize: "1rem", lineHeight: "32px" }}>
                Making Product more usable
              </span>
            </div>
          </div>
        </div>

        <div className="client_description" style={{ marginTop: "3rem" }}>
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
          <div className="client_des_grid">
            <ClientGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComapnyDes;
