import { Route, Routes } from 'react-router-dom';
import React, { Component } from "react";
import Header from './Header';
import Home from "./Home";
import Education from "./Education";
import TeamProject from "./TeamProject";
import PersonalProject from "./PersonalProject";
import WorkExperience from "./WorkExperience";
import Footer from "./Footer";
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <Routes>

                    <Route name="Home" exact path="/" element={<Home/>}></Route>
                    <Route name="Education" path="/education" element={<Education/>}></Route>
                    <Route name="Teamproject" path="/teamproject" element={<TeamProject/>}></Route>
                    <Route name="Personalproject" path="/personalproject" element={<PersonalProject/>}></Route>
                    <Route name="Workexperience" path="/workexperience" element={<WorkExperience/>}></Route>

                </Routes>
                <Footer />
            </div>
        )
    }
}
export default App;