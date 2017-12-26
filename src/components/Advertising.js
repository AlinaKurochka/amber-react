import React, { Component } from 'react';

class Advertising extends Component {
  render() {
    return (
      <section className="advertising">
        <div className="container">
          <p className="text-center title title-gray">Creating a unique look.</p>
          <p className="text-center text text-gray">That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials and triumphs became at once unique and universal.</p>
          <div className="text-center header-inner-button">
            <a href="#" className=" btn button button-primary btn-lg active text-uppercase" role="button" aria-pressed="true">purchase now</a>
          </div>
        </div>
     </section>
    );
  }
}

export default Advertising;
