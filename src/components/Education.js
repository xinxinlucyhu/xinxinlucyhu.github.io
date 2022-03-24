import React, { Component } from 'react';
import '../css/Education.css';


class Education extends Component {
  render() {
    return (
      <div className='educationpage'>
        <div className='educhildpage'>
        <div className='edu  bootcamp'>
          <div className='eduwords'>
            <h2>Boot Camp</h2>
            <p> Tech Talent South</p>
            <p>Front-end and Back-end Computer Languages</p>
            <p>Online, USA-2021&2022</p>
           <u><a href="https://www.techtalentsouth.com">website</a></u> 
            
          </div>
          <hr></hr>
          <div className='eduimgdiv'>
           <img className="eduimg" src="https://titus.techtalentsouth.com/pluginfile.php/2/course/section/139/TTS-Identity-FullColor-HorizontalStack.png"></img>
          </div>
        </div>


        <div className='edu  university'>
          <div className='eduwords'>
            <h2>University</h2>
            <p>Inner Mongolia University of Finance and Economics, </p>

            <p> B.S in Business English </p>
            <p>Huhhot, China-2014</p>
            <u><a href="https://en.wikipedia.org/wiki/Inner_Mongolia_University_of_Finance_and_Economics">wikipedia page</a></u> 
       
          </div>
          <hr></hr>
          <div className='eduimgdiv'>
            <img className="collegeimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXsnkFN4EWMVIfwB5mVv4KEN1-Z4Nyy3bo5d37CisiB70imsqVJppyb9VXiyr1vUnIPs&usqp=CAU"></img>
          </div>
        </div>

        </div>
      </div>

    );
  }
}
export default Education;