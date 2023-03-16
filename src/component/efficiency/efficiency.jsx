import "../../css/efficiency.css";
import React from "react";
import Card1 from "./Card_1";
import Teams from "./Teams";
import { valueArr } from "../../constants/data";

const efficiency = () => {
  return (
    <div className="e_main_container root">
      <div className="parent">
        <div className="child-1">
          <div className="about-us-div">
            <h1>ABOUT US</h1>
          </div>
          <div
            style={{
              marginTop: "2em",
              
             
            }} className="child-1_firstheading"
          >
            <p
              style={{
                letterSpacing: "-1px",
                lineHeight: "34px",
                fontSize: "2.5rem",
                fontWeight: "400",
                fontFamily: "Poppins",
              }}
            >
              Who We Are?
            </p>
          </div>
          <div
            style={{
              color: "#000000",
              marginTop: "1.3em",
              fontSize: "1.2rem",
              // width: "86%",
              fontWeight: "500",
              lineHeight: "30px",
              fontFamily: "Poppins",
            }}
            className="child-1_secondheading"
          >
            <p>
              As an Innovation & Invention Company ,we believe in technology as
              a force for good. We always try to solve human error with the
              technological solutions
            </p>
          </div>

          <div className="list">
            <ul>
              <li>
                Our USP - Low cost automation solutions by our expert team
                members
              </li>
              <li>Mission - 100 Innovations & Inventions</li>
              <li>Vision - Save planet from human errors</li>
              <li>
                Value Proposition - Informative ,Comfort, Security, Control,
                Flexibility, & Ease
              </li>
            </ul>
          </div>
        </div>
        <div className="child-2">
          <div className="about_image">
            <img src="assests/image/about 1.png" alt=""></img>
          </div>
          <div className="second-box">
            <div className="second-box-child1">
              Start Growing With Community & Experience Endless Possibilities
            </div>
            <div className="second-box-child2">
              <div className="profile_img">
                <img src="assests/image/team1 1.png" alt=""></img>
              </div>
              <div className="profile_des">
                <div className="profile_name" style={{ fontWeight: "700" }}>
                  Manish Kumar
                </div>
                <div className="profile_deg">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{ padding: "1.5em" }}>
        <div
          style={{
            marginTop: "2em",
            width: "17em",
            fontWweight: "200",
          }}
        >
          <p
            style={{
              letterSpacing: "-1px",
              lineHeight: "34px",
              fontSize: "36px",
              fontWeight: "400px",
              fontFamily: "Poppins",
            }}
          >
            Our Values
          </p>
        </div>
        <div className="value_cards">
          {valueArr.map((cardData, idx) => {
            return (
              <div
                className="value_card"
                id={`value_card_${idx}`}
                key={cardData + idx}
              >
                <Card1
                  title={cardData.title}
                  title_des={cardData.title_des}
                ></Card1>
              </div>
            );
          })}
        </div>
      </section>
      <section style={{ padding: "1.5em" }}>
        <div
          style={{
            marginTop: "2em",
            width: "17em",
            fontWweight: "200",
          }}
        >
          <p
            style={{
              letterSpacing: "-1px",
              lineHeight: "34px",
              fontSize: "36px",
              fontWeight: "400px",
              fontFamily: "Poppins",
            }}
          >
            Meet Our Team
          </p>
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: " 20px",
            lineHeight: "25px",
            color: "#000000",
            marginTop:"20px"
            
          }}
        >
          We’re a growing team of technological experts and thought leaders
        </div>
        <Teams/>
      </section>
    </div>
  );
};

export default efficiency;
