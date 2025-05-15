import React from 'react'
import Typewriter from './Typewriter'

const Home = () => {
  return (
    <>
    
      <div className="fakeHadding"></div>
      <div className='home'>
        <div className="contain">
          <div className="hello">
            <p className='hlo'>HELLO I'M HANEEN MOUSA</p>
            <Typewriter />
          </div>
          <div className="objective">
            <p >Passionate web developer, dedicated to creating user-friendly and responsive websites. I strive to blend creativity with functionality, ensuring seamless and engaging user experiences.
            </p>
          </div>
        </div>
        <div className="resume">  
          <a href="/HANEEN_MOUSA.pdf" download>
          <h3>Downlode Resume</h3>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
