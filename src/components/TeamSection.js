import React, { Component } from 'react';

class TeamSection extends Component {
  render() {
    return (
      <section className="team-section">
        <div className="container">
          <div className="text-center">
            <p className="title">Our team</p>
          </div>
          <div className="row">
            <div className="team-item col-xs-12 col-sm-6 col-md-3">
              <div className="team-item-inner">
                <div className="team-item-header">
                  <img src="img/photo-4.jpeg" alt="" className="team-item-image" />
                </div>
                <div className="team-item-body">
                  <div className="team-item-info">
                    <p className="team-item-info-title">Manny Delgado</p>
                    <p className="team-item-info-subtitle">a little boy</p>
                  </div>
                  <div className="team-item-body-content">
                    <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                  </div>
                </div>
                <div className="team-item-footer">
                  <a href="#" className="btn button team-item-btn btn-lg text-uppercase" role="button">Profile</a>
                </div>
              </div>
            </div>
            <div className="team-item col-xs-12 col-sm-6 col-md-3">
              <div className="team-item-inner">
                <div className="team-item-header">
                  <img src="img/photo-4.jpeg" alt="" className="team-item-image" />
                </div>
                <div className="team-item-body">
                  <div className="team-item-info">
                    <p className="team-item-info-title">Manny Delgado</p>
                    <p className="team-item-info-subtitle">a little boy</p>
                  </div>
                  <div className="team-item-body-content">
                    <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                  </div>
                </div>
                <div className="team-item-footer">
                  <a href="#" className="btn button team-item-btn btn-lg text-uppercase" role="button">Profile</a>
                </div>
              </div>
            </div>
            <div className="team-item col-xs-12 col-sm-6 col-md-3">
              <div className="team-item-inner">
                <div className="team-item-header">
                  <img src="img/photo-4.jpeg" alt="" className="team-item-image" />
                </div>
                <div className="team-item-body">
                  <div className="team-item-info">
                    <p className="team-item-info-title">Luke Dunphy</p>
                    <p className="team-item-info-subtitle">NATO representative</p>
                  </div>
                  <div className="team-item-body-content">
                    <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                  </div>
                </div>
                <div className="team-item-footer">
                  <a href="#" className="btn button team-item-btn btn-lg text-uppercase" role="button">Profile</a>
                </div>
              </div>
            </div>
            <div className="team-item col-xs-12 col-sm-6 col-md-3">
              <div className="team-item-inner">
                <div className="team-item-header">
                  <img src="img/photo-4.jpeg" alt="" className="team-item-image" />
                </div>
                <div className="team-item-body">
                  <div className="team-item-info">
                    <p className="team-item-info-title">Mitchell Pritchett</p>
                    <p className="team-item-info-subtitle">ecology lawer</p>
                  </div>
                  <div className="team-item-body-content">
                    <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                  </div>
                </div>
                <div className="team-item-footer">
                  <a href="#" className="btn button team-item-btn btn-lg text-uppercase" role="button">Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamSection;
