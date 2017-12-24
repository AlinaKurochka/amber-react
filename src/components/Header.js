import React, { Component } from 'react';
import photoslider1 from '../img/photo-slider-1.jpg';
import photoslider2 from '../img/photo-slider-2.jpeg';
import photoslider3 from '../img/photo-slider-3.png';
import photoslider4 from '../img/photo-slider-4.jpeg';
import photoslider5 from '../img/photo-slider-5.jpg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-inner header-inner-absolute">
          <p className="text-center header-title">Creating a unique look.</p>
          <p className="text-center header-title header-text">Never been easier.</p>
            <div className="header-inner-button">
              <a href="#" className="btn button button-secondary mr-4 btn-lg active text-uppercase" role="button" aria-pressed="true">see features</a>
              <a href="#" className=" btn button button-primary btn-lg active text-uppercase" role="button" aria-pressed="true">purchase now</a>
            </div>
        </div>
    <div id="carouselExampleIndicators" className="carousel slide header-carousel" data-ride="carousel">
      <ol className="carousel-indicators header-carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active header-carousel-active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active height-vh">
          <img className="d-block w-100" src={photoslider1} alt="First slide" />
        </div>
        <div className="carousel-item height-vh">
          <img className="d-block w-100" src={photoslider2} alt="Second slide" />
        </div>
        <div className="carousel-item height-vh">
          <img className="d-block w-100" src={photoslider3} alt="Third slide" />
        </div>
        <div className="carousel-item height-vh">
          <img className="d-block w-100" src={photoslider4} alt="Third slide" />
        </div>
        <div className="carousel-item height-vh">
          <img className="d-block w-100" src={photoslider5} alt="Third slide" />
        </div>
      </div>
    </div>
  </header>
    );
  }
}

export default Header;
