import React, { Component } from 'react';
import '../css/Footer.css';


class Footer extends Component {
  render() {
    return (
      <footer className='site-footer'>
      <div className='footertop'>
      <div className='hours'>
      <h5 className='footerh5'>Work Hours</h5>
      <p>Monday - Friday</p>
      <p>8 a.m. to 5 p.m.</p>
     </div>
      <div className='contact'>
      <h5 className='footerh5'>Contact</h5>
      <p>Cell: 317-764-6205</p>
      <p>E-mail: <a className='build'  href="mailto:lucyhu198977@gmail.com">lucyhu198977@gmail.com</a></p>
      
      </div>
      </div>
      <div className='companytag'>
      <p>@Lucy 2022</p>
      </div>
      
      </footer>
    );
}}
export default Footer;