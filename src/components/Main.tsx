import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

import profileImage from "../assets/images/professional_image.jpg";
import kodekloudLogo from "../assets/images/kodekloud.png";

const Main = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-overlay" />

      <div className="container">
        <div className="content-wrapper">

          <div className="image-wrapper">
            <img src={profileImage} alt="Machhindranath" />
          </div>

          <div className="content">
            <h1 className="hero-text greeting">Hi, I’m</h1>
            <h2 className="hero-text name">Machhindranath</h2>
            <p className="hero-text role">DevOps Engineer</p>

            <div className="social_icons">
              <a href="https://github.com/Machhindra-9" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>

              <a href="https://www.linkedin.com/in/machhindra9" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
