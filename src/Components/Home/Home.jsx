import React from 'react'
import './Home.css'
// import bright1 from '../../assets/bright1.jpg'
import bb from '..//..//assets/bb.jpg'

function Home() {

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1ZUOylNu5c0as4Ua1CFWsj7nz-eT1B5v8/view?usp=drive_link', '_blank');
  }
  const openTranscript = () => {
    window.open('https://drive.google.com/file/d/1-2cs4OCZX2wm4MKh3-QXChRl3VCvVa5j/view', '_blank');
  }

  return (
    <div id='home' className='home'>
      <img src={bb} alt=''/>
      <h1><span>I'm Sirabet Tansakul , </span>Frontend Developer </h1>
      <p>Hello, my name is Sirabet Tansakul, nickname Bright. I am currently a student in the Computer Electronics Technology program at King Mongkut's University of Technology North Bangkok. I am interested in web development as a Frontend Developer.</p> 
      <div className="home-action">
        <button onClick={openTranscript} type='submit' className="home-transcript"> My Transcript</button>
        <button onClick={openResume} type='submit' className="home-resume"> My Resume</button>
      </div>
    </div>
  )
}

export default Home

