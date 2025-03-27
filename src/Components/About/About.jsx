import React from "react";
import './About.css';
import bright1 from '../../assets/bright2.jpg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={bright1} alt=''/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <div className="about-skills">
                            <h1>Skills :</h1>
                            <h3>Frontend Developer</h3>
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"40%"}}/></div>
                            <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}/></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                        </div>
                        <div className="about-experiences">
                            <h1>Work Experience :</h1>
                            <div className="about-experience"><p>2020 - Agency ICT Samut Songkhram Technical College</p></div>
                            <div className="about-experience"><p>2022 - Statistical Agency Samut Songkhram Provincial Administrative Organization</p></div>
                        </div>
                        <div className="about-educations">
                            <h1>Education :</h1>
                            <div className="about-education"><p>2018 - 2023 - High Vocational Certificate (Computer Hardware) and Vocational Certificate(Computer Technology) Samut Songkhram Technical College</p></div>
                            <div className="about-education"><p>2023 - 2025 - Bachelor of Industrial Technology (Electronics Computer Technology) King Mongkut's University of Technology North Bangkok (KMUTNB)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About