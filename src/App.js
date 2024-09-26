// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import LatestSection from './components/LatestSection';
import SkillsSection from './components/SkillsSection';
import Events from './components/Events';
import Footer from './components/Footer';

import Login from './components/Login';  // Keep Login for separate page access if needed

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={
          <div>
            <section id="home">
              <HeroSection />
            </section>
            <section id="blog">
              <BlogSection />
            </section>
            <section id="latest">
              <LatestSection />
            </section>
            <section id="events">
              <Events/>
            </section>
            <section id="login">
              <Login />  {/* Include the login section here if you want to show it on the same page */}
            </section>
            <section id="skills">
              <SkillsSection />
            </section>
            <section id="footer">
              <Footer/>
            </section>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
