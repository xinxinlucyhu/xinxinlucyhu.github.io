import React, { Component } from 'react';
import '../css/Home.css';


class Home extends Component {
  render() {
    return (
      <div className='homepage'>
       <div className='homechild'>
        <div className='name workitem'>
          <h2>First Name:</h2><h2 className='lucy'> Xinxin</h2>
          <h2>Last Name: </h2><h2 className='lucy'>Hu</h2>
          <h2>Preferred Name: </h2><h2 className='lucy'>Lucy</h2>
          <hr></hr>
        </div>
       <u></u>

        <div className='workitem'>
          <h2>Computer skills</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>SQL</p>
          <p>React</p>
          <p>Java script</p>
          <p>Bootstrap</p>
          <p>Springboot</p>
          <p>Thymleaf</p>
          <p>Command Line</p>
          <p>Microsoft Office</p>
        </div>

        <div className='language workitem'>
          <h2>Language</h2>
          <p>Chinese(native)</p>
          <p>English(advanced)</p>
          <p>Business Foreign Language Translation Skill Certified</p>
          <img className='homeimg' src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;