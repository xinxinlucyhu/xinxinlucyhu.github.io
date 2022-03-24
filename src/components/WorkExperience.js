import React, { Component } from 'react';
import '../css/WorkExperience.css';
import businesscard from '../businesscard.jpg';
import coach from '../coach.jpg';


class WorkExperience extends Component {
  render() {
    return (
      <div className='workpage'>
        <div className='workpagechild'>
          <div className='worktour'>
            <div className='workwords'>

              <h2>ISeeTour, Italy </h2>
              <h4>Marketing Representative, 2017-2018</h4>
              <p>Developed and managed new distributors;</p>
              <p>Established US market, wrote invoices;</p>
              <p>Supplied tour information to distributors;</p>
              <p>Coordinated with other departments;</p>
              <p>Became proficient user of company's sales software.</p>
              
            </div>
            <hr></hr>
            <div className="workimgdiv">
              <img className="workimg" src={businesscard}></img>

            </div>

          </div>


          <div className='worktour'>
            <div className='workwords'>

              <h2>Jiaritour by IseeTour, China </h2>
              <h4>Tour Operator, 2015-2017</h4>
              <p>Analyzed tour routes to book hotels and buses</p>
              <p>Maintained records of all orders; </p>
              <p>Resolved issues for vendors and customers across multiple time zones;</p>
              <p>Developed partnerships with hotels throughout Europe and new tour routes</p>
              <p>Became proficient user of company's travel-booking software.</p>
              <hr></hr>
            </div>
            <div className='workimgdiv'>
              <img className="workimg" src={coach}></img>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
export default WorkExperience;