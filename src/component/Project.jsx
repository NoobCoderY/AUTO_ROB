import React from "react";

const Project = () => {
  return (
    <>
      <div className="project_heading">Projects</div>

      <div className="project_container">
        <div className="project">
          <div className="project_count">6</div>
          <div className="description">
            <h3>PROJECTS</h3>
            <p>
              Includes Manufacting Processes, Transporation Upgradation, Retail
              Innovation , Home Innovation, Business Software Solutions etc
            </p>
          </div>
        </div>
        <div className="team">
          <div className="team_count">24</div>
          <div className="description">
            <h3>TEAM MEMBERS</h3>
            <p>
              We're specialized in building technologies and passionate about
              what we do, setting aggressive goals for our clients .
            </p>
          </div>
        </div>
        <div className="client">
          <div className="client_count">97</div>
          <div className="description">
            <h3>CLIENTS</h3>

            <p>
              Includes Manufacting Processes, Transporation Upgradation, Retail
              Innovation , Home Innovation, Business Software Solutions etc
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
