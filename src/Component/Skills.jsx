import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="fakeHadding"></div>
      
      <div className='skill'>
        <h1 className='h1'> Skills</h1>
        <div className="TechnicalSkills skills">
          <h1 className='h1'>Tech Skills</h1>
          <div className="tech">
            <ul className='ul'>
              <li className='li'>
                <strong>Programming Languages:</strong>
                <div className="logo-container">
                  <i className="devicon-php-plain colored"></i>
                  <span className='techSk'>PHP</span>
                </div>
                <div className="logo-container">
                  <i className="devicon-javascript-plain colored"></i>
                  <span className='techSk'>JavaScript</span>
                </div>

              </li>
              <li className='li'>
                <strong>Web Development:</strong>
                <div className="logo-container">
                  <i className="devicon-laravel-plain colored"></i>
                  <span className='techSk'>Laravel</span>
                </div>


                <div className="logo-container">
                  <i className="devicon-react-original colored"></i>
                  <span className='techSk'>React.js</span>
                </div>
                <div className="logo-container">
                  <i className="devicon-bootstrap-plain colored"></i>
                  <span className='techSk'>Bootstrap</span>
                </div>
                <div className="logo-container">
                  <i className="devicon-dot-net-plain colored"></i>
                  <span className='techSk'>ASP.NET</span>
                </div>

              </li>

              <li className='li'>
                <strong>Version Control:</strong>
                <div className="logo-container">
                  <i className="devicon-git-plain colored"></i>
                  <span className='techSk'>Git</span>
                </div>
                <div className="logo-container">
                  <i className="devicon-github-original"></i>
                  <span className='techSk'>GitHub</span>
                </div>

              </li>
            </ul>
          </div>
        </div>
        <div className="SoftSkills skills">
          <h1 className='h1'>Soft Skills</h1>
          <div className="soft">
            <ul className='ul'>
              <li className='li'>
                <strong>Communication:</strong>
                <div className="logo-container">
                  <i className="devicon-communication-plain colored"></i>
                  <span className='softSK'>Fluent in English, I can communicate my ideas effectively, ensuring clarity in both professional and personal conversations.</span>
                </div>
              </li>
              <li className='li'>
                <strong>Teamwork:</strong>
                <div className="logo-container">
                  <i className="devicon-communication-plain colored"></i>
                  <span className='softSK'>Enjoy working with teams, building strong relationships, and collaborating to achieve common goals, whether individually or as part of a group.</span>
                </div>
              </li>


              <li className='li'>
                <strong>Leadership:</strong>
                <div className="logo-container">
                  <i className="devicon-leadership-plain colored"></i>
                  <span className='softSK'>With leadership experience from my childhood, including being a team captain, I guide others, helping them grow and succeed as part of a team.</span>
                </div>
              </li>
              <li className='li'>
                <strong>Problem Solving:</strong>
                <div className="logo-container">
                  <i className="devicon-problem-solving-plain colored"></i>
                  <span className='softSK'>Excellent at critical thinking, I can break down complex problems and find effective solutions, both in tech and real-world situations.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>



      </div>
    </>
  )
}

export default Skills
