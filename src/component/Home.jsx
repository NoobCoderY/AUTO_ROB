import React from "react";
import "../css/Home.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Project from "./Project";
import ComapnyDes from "./ComapnyDes";
const Home = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      color: "#000000",
    },
  });
  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "1rem" }}>
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
              {/* <img src="assests/image/laptop.svg" alt=""/> */}
            </div>
          </div>
        </section>
        <section style={{marginTop:"2rem"}}>
          <Project/>
        </section>

        <section style={{marginTop:"4rem"}}>
          <div className="products">
            <div className="first_product">
                   <img src="assests/image/Thumbnail.png" alt=""></img>
            </div>
            <div className="second_product">
            <img src="assests/image/Thumbnail (1).png" alt=""></img>
            </div>
          </div>
        </section>

        <section  style={{marginTop:"2rem"}}>
             <ComapnyDes/>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Home;
