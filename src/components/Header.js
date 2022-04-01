import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
  import '../css/Header.css';
  import lucylogo from '../lucylogo.png';
  
class Header extends Component{
render(){
    return(

        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/"><img alt="logo" id="headerlogo" src={lucylogo}></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="white"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item active">
              <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="teamproject">Team Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="personalproject">Personal Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="workexperience">Work Experience</Link>
            </li>
          </ul>

        </div>
      </nav>
    );
}
}
export default Header;