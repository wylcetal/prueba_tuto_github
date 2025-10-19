// src/unAuth/LandingPage.js
import React from "react";
import "./LandingPage.css";
import NavBar from "./components/NavBar";
import Bumpups from "./components/Bumpups";
import Timestamp from "./timestampcomp/Timestamp";
import Footer from "./components/Footer";
import PlaylistCTA from "./components/PlaylistCTA";

// hey this is cool!
const LandingPage = () => {




    
  return (
    <div className="landing-page-container">
      <div className="landing-content-wrapper">
        <NavBar />
        <Timestamp />
        <div className="section-divider" />
        <Bumpups />
        <div className="section-divider" />
        <PlaylistCTA />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
