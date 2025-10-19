// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import LandingPage from './unAuth/LandingPage';
import './App.css';
import './firebase';

function App() {
  return (
    <div className="app-structure-container">
      <Helmet>
        <meta
          name="description"
          content="TubeStamp is a free online tool that allows you to easily create timestamp links for YouTube videos. Share specific moments from videos with your friends and audience."
        />
        <meta
          name="keywords"
          content="CoffeeIsGood, timestamp, links, video, sharing, free, online, tool"
        />
      </Helmet>
      <LandingPage />
    </div>
  );
}

export default App;