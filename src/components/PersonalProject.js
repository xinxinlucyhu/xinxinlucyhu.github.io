import React, { Component } from 'react';
import '../css/PersonalProject.css';
import ghiblistudio from '../ghiblistudio.png';
import retirement from '../retirement.png';
import lucyscoffee from '../lucyscoffee.png';


class PersonalProject extends Component {
  render() {
    return (
      <div className='teampage'>
        <div className='teamprojectimg'>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ghiblistudio}  className="d-block w-100" alt="ghiblistudio"></img>
                <div class="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                <a href="https://github.com/xinxinlucyhu/ghibli-movies-api"><u><h4>Ghibli Studio</h4></u></a>
                  <p>Practised with Api</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={retirement} className="d-block w-100" alt="retirement"></img>
                <div className="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                <a href="https://retirementcalculate.herokuapp.com/"><u><h4>Retirement Calculator</h4></u></a>
                  <p>React</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={lucyscoffee} className="d-block w-100" alt="lucyscoffee"></img>
                <div className="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                <a href="https://github.com/xinxinlucyhu/lucys-coffeeshop"><u><h4>Lucy's coffee shop</h4></u></a>
                  <p>React, SpringBoot, Api, Database</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

      </div>
    );
  }
}
export default PersonalProject;