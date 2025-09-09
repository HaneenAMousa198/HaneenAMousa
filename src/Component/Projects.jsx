import React from 'react'
import project1 from '../Images/project1.png';
import project2 from '../Images/project2.png';
import project3 from '../Images/project3.png';
import project4 from '../Images/project4.png';
const Projects = () => {
  return (
    <>
      
      <div className='projects'>
        {/* <h1 className="projects-title">My Projects</h1> هذا العنوان */}
        <div className="Project ul">
          <div id='p1' className="project li">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-font">
                  <img src={project1} alt="Project 1" />
                </div>
                <div className="flip-box-back">
                  <h3>Personal Portfolio 💼</h3>
                  <p>A sleek and responsive portfolio showcasing my projects, skills, and experience. Designed with a modern UI to highlight my journey in web development and programming. </p>

                </div>
              </div>
            </div>
          </div>

          <div id='p2' className="project li">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-font">
                  <img src={project2} alt="Project 2" />
                </div>
                <div className="flip-box-back">
                  <h3>Todo App</h3>
                  <p>a simple web application for managing daily tasks. It allows users to create, update, delete, and track the status of their tasks (completed or pending). Built using Laravel and Bootstrap.</p>
                </div>
              </div>
            </div>
          </div>

          <div id='p3' className="project li">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-font">
                  <img src={project3} alt="Project 3" />
                </div>
                <div className="flip-box-back">
                  <h3>MoodFood 🍽️</h3>
                  <p>an innovative app that connects your mood with personalized meal suggestions. It analyzes your emotional state and recommends healthy recipes to boost your energy, focus, and happiness.</p>
                </div>
              </div>
            </div>
          </div>

          <div id='p4' className="project li">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-font">
                  <img src={project4} alt="Project 4" />
                </div>
                <div className="flip-box-back">
                  <h3>Weather App ⛅</h3>
                  <p>
                    "This project is built using React and integrates a JSON API containing all the governorates of Jordan, allowing users to select a city and fetch related weather data dynamically."</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Projects
