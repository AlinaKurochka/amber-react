import React, { Component } from 'react';

class ReviewSection extends Component {
  render() {
    return (
      <section className="review-section">
        <div className="container">
          <div id="carouselReview" className="carousel slide carousel-center" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <blockquote className="review-item">
                  <div className="review-item-content">
                    <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
                  </div>
                  <div className="review-item-footer">
                    <p>— Moby-Dick, Herman Melville</p>
                  </div>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="review-item">
                  <div className="review-item-content">
                    <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
                  </div>
                  <div className="review-item-footer">
                    <p>— Moby-Dick, Herman Melville</p>
                  </div>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="review-item">
                  <div className="review-item-content">
                    <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
                  </div>
                  <div className="review-item-footer">
                    <p>— Moby-Dick, Herman Melville</p>
                  </div>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="review-item">
                  <div className="review-item-content">
                    <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
                  </div>
                  <div className="review-item-footer">
                    <p>— Moby-Dick, Herman Melville</p>
                  </div>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="review-item">
                  <div className="review-item-content">
                    <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
                  </div>
                  <div className="review-item-footer">
                    <p>— Moby-Dick, Herman Melville</p>
                  </div>
                </blockquote>
              </div>
            </div>
            <ol className="carousel-indicators review-carousel-indicators">
              <li data-target="#carouselReview" data-slide-to="0" className="active"></li>
              <li data-target="#carouselReview" data-slide-to="1"></li>
              <li data-target="#carouselReview" data-slide-to="2"></li>
              <li data-target="#carouselReview" data-slide-to="3"></li>
              <li data-target="#carouselReview" data-slide-to="4"></li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewSection;
