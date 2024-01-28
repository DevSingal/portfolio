import React from 'react'
import coding from "../assets/code.jpg"
import { Link } from 'react-router-dom'

const Coding = () => {
  return (
    <>
     <div className="coding football">
        <h1>Coding</h1>
        <div className="info_container">
          <div className="img_container">
            <img src={coding} alt="" />
          </div>
          <div className="text_container">
            <p>I started coding in 10th class and started it as just to explore the field. Started out with web dev and learned a lot about it but then i paused it cuz of upcoming exams and laziness in pandemic. I really liked web dev out of all the fields i explored at that time, so sticked with it and learned a lot of things such as React.js, Node.js, Express.js, Mongodb, multiple libraries of node.js such as JWT to store tokens in cookies, learnt to hash passwords using bcrypt, authentications of all sorts etc. I did made some projects along the way but some of them are not completed all the way. here is a link to <Link to={"/projects"} > my projects </Link> if you wanna see some of them.  </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coding