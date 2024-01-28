import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>Projects</h1>
        <div className="project_container">

          {/* BACKEND API */}
          <div className="project">
            <div className="project_text">
              <h2>Backend Api</h2>
              <p>
                This is backend api which performs crud operations which is
                connected to mongodb cluster online and is depolyed on render
                (though frontend is not made properly so for testing and
                checking use postman or any software to make api). I have mainly
                used nodejs, expressjs, mongoose for db connection, bcrypt for
                password hashing, jwt for tokens etc. Link to the repository is given below.
              </p>
              <div className="project_links">
                <a href={"https://github.com/DevSingal/BackendApi"} target="_blank" >
                  {" "}
                  See code here{" "}
                </a>
              </div>
            </div>
          </div>

          {/* News App */}
          <div className="project">
            <div className="project_text">
              <h2>News App</h2>
              <p>
              This is an app that shows daily real-time news. I used NewsApi to obtain news, used "Axios" to call the API, and parsed it using "React Query".
              </p>
              <div className="project_links">
                <a href={"https://github.com/DevSingal/NewsWebsite"} target="_blank" >
                  {" "}
                  See code here{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
