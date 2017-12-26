import React, { Component } from 'react';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Advertising from './sections/Advertising';
import Works from './sections/Works';
import Amber from './sections/Amber';
import Features from './sections/Features';
import ReviewSection from './sections/ReviewSection';
import BlogSection from './sections/BlogSection';
import ExperienceSection from './sections/ExperienceSection';
import TeamSection from './sections/TeamSection';
import Footer from './sections/Footer';

import './css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Advertising />
        <Works />
        <Amber />
        <Features />
        <ReviewSection />
        <BlogSection />
        <ExperienceSection />
        <TeamSection />
        <Footer />
      </div>
    );
  }
}

export default App;
