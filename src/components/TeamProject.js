import React, { Component } from 'react';
import '../css/PersonalProject.css';
import address3 from '../address3.png';
import blog from '../blog.png';
import weatherapi3 from '../weatherapi3.png';



class TeamProject extends Component {
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
                <img src={blog} className="d-block w-100" alt="blog"></img>
                <div class="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                  <a href="https://github.com/xinxinlucyhu/blog"><u><h4>Blog</h4></u></a>
                  <p>Database, SpringBoot with Thymeleaf</p>
                </div>
              </div>


              <div className="carousel-item">
                <img src={weatherapi3} className="d-block w-100" alt="weatherapi"></img>
                <div className="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                  <a href="https://github.com/xinxinlucyhu/weatherapp"><u><h4>WeatherApi</h4></u></a>
                  <p>SpringBoot with Thymeleaf</p>
                </div>
              </div>


              <div className="carousel-item">
                <img src={address3} className="d-block w-100" alt="addressbook"></img>
                <div className="carousel-caption d-none d-md-block">
                </div>
                <div className='projectlink'>
                  <a href="https://github.com/xinxinlucyhu/addressbook"><u><h4>Address Book</h4></u></a>
                  <p>SpringBoot with Thymeleaf, Database</p>
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
export default TeamProject;