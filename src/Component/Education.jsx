import React from 'react'

const Education = () => {
  return (
    <>

      <section className='education'>
        <h1 className="head">Education</h1>
        <div className="edu">
          <div className="eduLeft infoo">
            <div className="detail">
              <h4 className='data'>2020 - 2024</h4>
            </div>
            <div className="detail">
              <h4>The University of Jordan (UJ)</h4>
            </div>
            <div className="detail">
              <h4>B.Tech in Computer Science </h4>
            </div>
            <div className="detail">
              <h3>OOP ,  Software Engineering , Data Structures and Algorithms
                Operating Systems , Programming Languages (C++,html,php) , Computer Architecture
              </h3>
            </div>
          </div>

          <div className="eduRight infoo">
            <div className="detail">
              <h4 className='data'>2017 - 2019</h4>
            </div>
            <div className="detail">
              <h4>Zarqa University College</h4>
            </div>
            <div className="detail">
              <h4>Diploma in Information Security and Networks</h4>
            </div>

          </div>
        </div>
      </section>

      {/*         
      </div> */}
    </>
  )
}

export default Education
