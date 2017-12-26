import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Advertising from './components/Advertising';
import Works from './components/Works';
import Amber from './components/Amber';
import Features from './components/Features';
import ReviewSection from './components/ReviewSection';
import BlogSection from './components/BlogSection';
import ExperienceSection from './components/ExperienceSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

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
