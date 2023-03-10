import React from "react";
import "../css/Home.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Project from "./Project";
import ComapnyDes from "./ComapnyDes";
import About from "./About";
const Home = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      color: "#000000",
    },
  });
  return (
    <div
      style={{ paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "1rem" }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <nav>
          <div className="nav_1_container">
            <div className="logo">
              <img src="assests/image/5000 high res icon (1).png" alt="#"></img>
            </div>
            <div className="logo_content">AN INNOVATION & INVENTION CO.</div>
          </div>
          <div className="nav_2_container">
            <li>About Us</li>
            <li> Project</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </div>
        </nav>
        <section>
          <div className="banners">
            <div className="first_banner">

            </div>
            <div className="second_banner">
              
            </div>
          </div>
        </section>
        <section style={{ marginTop: "2rem" }}>
          <Project />
        </section>

        <section style={{ marginTop: "4rem" }}>
          <div className="products">
            <div className="first_product">
              <img src="assests/image/Thumbnail.png" alt=""></img>
            </div>
            <div className="second_product">
              <img src="assests/image/Thumbnail (1).png" alt=""></img>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <ComapnyDes />
        </section >
        <section style={{ marginTop: "2rem" }}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2rem",
              letterSpacing: "1px",
            }}
            className="about_heading"
          >
            Have a project?Let's make great things!
          </h3 >

          <h3
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "8px",
              color: "grey",
              marginTop:"0.5rem"
            }}
          >
            Let's work together
          </h3>
          <About />
        </section>
        <section style={{ marginTop: "3rem" }}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2.3rem",
              letterSpacing: "1px",
            }}
          >
            Join Us
          </h3>
         <div  className="joinus">
          <p
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1.3rem",
              letterSpacing: "2px",
              lineHeight:"40px"
            }}
          >
            Are you passionate about working with clients to solve their
            technological issues? We’re always looking for new talent to add to
            our team. Get in touch to see if we’re a good fit.
          </p>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Home;
