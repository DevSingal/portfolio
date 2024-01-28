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
          Hey, I am Dev Singal a freshie in the environmental science and
          engineering department. I am a MERN stack web developer and I am a
          self-taught programmer and I have been coding for a little over a
          year now. I participated in XLR8 this year and we got 3rd place in
          the event, had a lot of fun in that but our both esp32 and esp01 got
          burnt once. MS101 was a hellish experience (though I got a 10 💁‍♂️),
          electrical was the tougher part for me (that op-amp fucked me real
          good) and had to build UTM (universal testing machine) in our project
          but we managed to build that somehow. My hobbies are playing football,
          watching anime, and programming.
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