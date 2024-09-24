import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home">
  <div className="textContainer">
  <p className='p1'>
  HEY, I am Dev Singal a Sophomore in the
  </p>
  <p className='p2'>
  environmental science and engineering department at IIT Bombay. I am a MERN stack web developer
    </p>

    <div className="btnContainer">
      <Link to="/projects" className="btn">See my projects</Link>
      <Link to="/about" className="btn">About Me</Link>
</div>


    </div>
</div>


    </>
  )
}

export default Home;

