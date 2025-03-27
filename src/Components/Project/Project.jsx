import React from 'react'
import './Project.css'
import Project1 from '..//..//assets/Project1.jpg'
import Project2 from '..//..//assets/Project2.jpg'
import arrow_icon from '../..//assets/arrow_icon.svg'

function Project() {
  return (
    <div id='project' className='project'>
      <div className="project-title">
        <h1>My Project</h1>
      </div>
      <div className="project-container">
        <div className='project-format-project1'>
          <img src={Project1} alt=''/>
          <p>กระปุกออมสินอัจฉริยะ (2020)</p>
          <p>(Smart Piggy Bank)</p>
          <div className='project-readmore'>
            {/* <p>Read More</p>
            <img src={arrow_icon} alt=''/> */}
          </div>
        </div>

        <div className='project-format-project2'>
          <img src={Project2} alt=''/>
          <p>ชุดการเรียนรู้ระบบลิฟท์ (2022)</p>
          <p>(Elevator System Learning Kit)</p>
          <div className='project-readmore'>
            {/* <p>Read More</p>
            <img src={arrow_icon} alt=''/> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
