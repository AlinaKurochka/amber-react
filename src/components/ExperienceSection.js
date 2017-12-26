import React, { Component } from 'react';

class ExperienceSection extends Component {
  render() {
    return (
      <section className="experience-section">
        <div className="container">
          <div className="text-center">
            <p className="title">Company expirience</p>
          </div>
          <div className="row">
            <div className="experience-item col-xs-12 col-sm-4">
              <div className="experience-item-chart chart" data-percent="77">
                <i className="experience-item-chart-icon fa fa-cogs" aria-hidden="true"></i>
              </div>
              <div className="experience-item-content">
                <p className="experience-item-title">500</p>
                <p className="experience-item-subtitle">years of web development</p>
              </div>
            </div>
            <div className="experience-item col-xs-12 col-sm-4">
              <div className="experience-item-chart chart" data-percent="45">
                <i className="experience-item-chart-icon fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="experience-item-content">
                <p className="experience-item-title">25 000</p>
                <p className="experience-item-subtitle">results of the last winter year</p>
              </div>
            </div>
            <div className="experience-item col-xs-12 col-sm-4">
              <div className="experience-item-chart chart" data-percent="25">
                <i className="experience-item-chart-icon fa fa-rocket" aria-hidden="true"></i>
              </div>
              <div className="experience-item-content">
                <p className="experience-item-title">100 000</p>
                <p className="experience-item-subtitle">euros of the military budget</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExperienceSection;
