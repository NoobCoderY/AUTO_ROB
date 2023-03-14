import React from "react";
import "../../css/ContactPage.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ContactPage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      color: "#000000",
    },
  });
  return (
    <div className="main_contact_page_container">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className="contact_page_container_child_1">
          <div className="contact-us-div">
            <h1>CONTACT US</h1>
          </div>
          <div className="get_in_touch_div" style={{ marginTop: "1.2rem" }}>
            <h3>Get in touch</h3>
            <div
              className="get_in_touch_div_second_child"
              style={{
                width: "60%",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "0.9rem",
                lineHeight: "20px",
                textAlign: "justify",
              }}
            >
              <>
                Hi there, We are available 24/7 by fax, e-mail or by phone. Drop
                us line so we can talk further about that.
              </>
            </div>
            <div className="E_mail" style={{ marginTop: "0.5rem" }}>
              <h2>E-Mail:</h2>
              <div
                style={{
                  width: "55%",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "0.8rem",
                  textAlign: "justify",
                  marginTop: "-0.8rem",
                }}
              >
                support@autorob.com
              </div>
            </div>
            <div className="visit_us" style={{ marginTop: "0.5rem" }}>
              <h2>Visit Us:</h2>
              <div
                className="get_in_touch_div_second_child"
                style={{
                  width: "60%",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "0.9rem",
                  textAlign: "justify",
                  marginTop: "-0.6rem",
                  lineHeight: "20px",
                }}
              >
                Regal Building, 2nd Floor, 44, Regal Building, Outer Circle,
                Connaught Place, Delhi, 110001
              </div>
            </div>
            <div className="visit_us" style={{ marginTop: "0.5rem" }}>
              <h2>Visit Us:</h2>
              <div
                style={{
                  width: "55%",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "0.8rem",
                  textAlign: "justify",
                  marginTop: "-0.8rem",
                }}
              >
                +91 9650040246
              </div>
            </div>
          </div>
        </div>
        <div className="contact_page_container_child_2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184245!2d77.20653218198595!3d28.628901718705755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1678824399784!5m2!1sen!2sin"
           
            style={{ border: "0px" ,width:"100%" ,height:"100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ContactPage;
