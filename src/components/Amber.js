import React, { Component } from 'react';

class Amber extends Component {
  render() {
    return (
      <section className="amber">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 text-amber">
              <p>Amber is the most metrolly WordPress theme ever created.</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="amber-inner-button">
                <a href="#" className=" btn button button-primary button-arrow btn-lg active text-uppercase" role="button" aria-pressed="true">purchase now<i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Amber;
