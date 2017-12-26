import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-inner col-xs-12 col-sm-6 col-md-3">
              <p className="footer-inner-title">Get in touch</p>
              <ul className="footer-inner-list">
                <li className="footer-inner-list-text">
                  <address className="footer-inner-list-adress">
                    <i className="fa fa-flag footer-inner-list-text-fa" aria-hidden="true"></i>
                    <span className="footer-inner-list-text-span">Address:</span>321 Street Name, United Kingdom, Londons
                  </address>
                </li>
                <li className="footer-inner-list-text">
                  <i className="fa fa-phone footer-inner-list-text-fa" aria-hidden="true"></i>
                  <span className="footer-inner-list-text-span">Phone:</span>+7 998 71 150 30 20
                </li>
                <li className="footer-inner-list-text">
                  <i className="fa fa-envelope footer-inner-list-text-fa" aria-hidden="true"></i>
                  <span className="footer-inner-list-text-span">Email:</span>info@ambertheme.com
                </li>
                <li>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20754.492253936176!2d32.0637525!3d49.4408287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1511897508074" width="212" height="149" frameborder="0" allowfullscreen className="footer-map">
                  </iframe>
                </li>
              </ul>
            </div>
            <div className="footer-inner col-xs-12 col-sm-6 col-md-3">
              <p className="footer-inner-title">Latest tweets</p>
              <ul className="footer-inner-list">
                <li className="footer-inner-list-twitter">
                  <i className="fa fa-twitter footer-inner-list-text-fa" aria-hidden="true"></i>
                  <span className="footer-inner-list-text-span">CMS Masters And Their Best Web Design Tools</span>
                  <a href="#">#bestwebdesigntools</a>
                  <a href="#">#webdesign</a>
                  <p className="footer-inner-list-text">— about 12 min ago</p>
                </li>
                <li className="footer-inner-list-twitter">
                  <i className="fa fa-twitter footer-inner-list-text-fa" aria-hidden="true"></i>
                  <span className="footer-inner-list-text-span">WOOCOMMERCE functionality added!!! See Industrial theme become even powerful!</span>
                  <a href="#">bit.ly/industrial-wp</a>
                  <p className="footer-inner-list-text">— about 47 days ago</p>
                </li>
                <li className="footer-inner-list-twitter">
                  <i className="fa fa-twitter footer-inner-list-text-fa" aria-hidden="true"></i>
                  <span className="footer-inner-list-text-span">CMS Masters And Their Best Web Design Tools</span>
                  <a href="#">#bestwebdesigntools</a>
                  <a href="#">#webdesign</a>
                </li>
              </ul>
            </div>
            <div className="footer-inner col-xs-12 col-sm-6 col-md-3">
              <p className="footer-inner-title">Follow Us</p>
              <ul className="footer-inner-list">
                <li className="footer-inner-list-sites">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <p>Like us on Facebook</p>
                  </a>
                </li>
                <li className="footer-inner-list-sites">
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <p>Follow us on Twitter</p>
                  </a>
                </li>
                <li className="footer-inner-list-sites">
                  <a href="#">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                    <p>Watch videos on YouTube</p>
                  </a>
                </li>
                <li className="footer-inner-list-sites">
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <p>Friend us on Instagram</p>
                  </a>
                </li>
                <li className="footer-inner-list-sites">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                    <p>Repin on Pinterest</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-inner col-xs-12 col-sm-6 col-md-3">
              <p className="footer-inner-title">Follow Us</p>
              <ul className="footer-inner-list">
                <li className="footer-inner-list-post">
                  <a href="#">
                    <time className="footer-inner-list-post-time">September, 30</time>
                    <div className="footer-inner-list-post-content">
                      <p>Candy canes dragée pudding. Donut cheesecake I love chocolate icing</p>
                    </div>
                  </a>
                </li>
                <li className="footer-inner-list-post">
                  <a href="#">
                    <time className="footer-inner-list-post-time">April, 22</time>
                    <div className="footer-inner-list-post-content">
                      <p>Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</p>
                    </div>
                  </a>
                </li>
                <li className="footer-inner-list-post">
                  <a href="#">
                    <time className="footer-inner-list-post-time">May, 12</time>
                    <div className="footer-inner-list-post-content">
                      <p>Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
