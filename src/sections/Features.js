import React, { Component } from 'react';

class Features extends Component {
  render() {
    return (
      <section className="features">
        <div className="container">
          <div className="text-center text-gray">
            <p className="title">Super features</p>
          </div>
          <div className="row features-content">
            <div className="col-12 col-sm-12 col-md-6 features-item-column">
              <div className="features-item">
                <div className="features-item-icon">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <p className="features-item-title">Brilliant creative design</p>
                <div className="features-item-content">
                  <p>Ah, well! It means much the same thing, said the Duchess, digging her  sharp little chin into Alice's shoulder as she added, and the moral  of that is m-dash.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 features-item-column">
              <div className="features-item">
                <div className="features-item-icon">
                  <i className="fa fa-trophy" aria-hidden="true"></i>
                </div>
                <p className="features-item-title">On mouse over title</p>
                <div className="features-item-content">
                  <p>Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 features-item-column">
              <div className="features-item">
                <div className="features-item-icon">
                  <i className="fa fa-magic" aria-hidden="true"></i>
                </div>
                <p className="features-item-title">Incredible documentation</p>
                <div className="features-item-content">
                  <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 features-item-column">
              <div className="features-item">
                <div className="features-item-icon">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                </div>
                <p className="features-item-title">Responsive &amp; retina ready</p>
                <div className="features-item-content">
                  <p>Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons. First, because I'm on the same side.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
