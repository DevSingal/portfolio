import React from 'react'
import HobbiesCard from './Hobbies';

import football from "../assets/football.jpg";
import anime from "../assets/anime.jpg";
import code from "../assets/code.jpg";  

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <p className="intro">
          Hey, I am Dev Singal a sophie in the environmental science and
          engineering department. I am a MERN stack web developer and I am a
          self-taught programmer and I have been coding for a little over 2
          years now. My hobbies are playing football,
          watching anime, and programming. I am a developer at DevCom, IITB. I am currently persuing a minor in Machine Learning and Data science.
        </p>
      </div>

      <div className="hobbies">
        <HobbiesCard name={"Football"} img={football} />
        <HobbiesCard name={"Anime"} img={anime} />
        <HobbiesCard name={"Coding"} img={code} />
        {/* Add more HobbiesCard components here */}
      </div>
    </>
  );
};

export default About