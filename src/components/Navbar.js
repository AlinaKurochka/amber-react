import React, { Component } from 'react';
import logo from '../img/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <div className="navbar navbar-toggleable-md">
          <div className="container flex-j-sb flex-y-center">
            <div className="navbar-left">
              <form className="form-inline my-2 my-lg-0 aform-search">
                <input className="aform" type="text" placeholder="Search" />
                <button className="button button-search" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>
            <div className="navbar-right">
              <ul className="navbar-nav mr-auto navbar-right-list">
                <li className="nav-item active">
                  <a className="nav-link" href="#"><i className="nav-link-icon fa fa-user-circle-o" aria-hidden="true"></i>Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="nav-link-icon fa fa-pencil" aria-hidden="true"></i>Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar-menu">
          <div className="container">
            <div className="row flex-j-sb flex-y-center">
              <div className="col-xs-12 col-sm-2 logo">
                <img src={logo} />
              </div>
              <div className="col-xs-12 col-sm-10 navbar-menu-left">
                <ul className="navbar-menu-left-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Typography</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Elements</a></li>
                  <li><a href="#">Commerse</a></li>
                  <li><a href="#">Mega menu</a></li>
                </ul>
              </div>
            </div>
          </div>  
        </nav>
      </div>
    );
  }
}

export default Navbar;
