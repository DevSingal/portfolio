import React from "react";
import football2 from "../assets/football2.jpeg";

const Football = () => {
  return (
    <>
      <div className="football">
        <h1>Football</h1>
        <div className="info_container">
          <div className="img_container">
            <img src={football2} alt="" />
          </div>
          <div className="text_container">
            <p>I have always liked football since i was kid so played it all the time. i have played SGFI nationals U-14 in football and currently am in NSO of football. I was in Inter-IIT pre camp and had a lot of fun in the camp playing and meeting with all the amazing seniors. My team participated in freshiesta as main team from H16-B and we were runner-ups in the tournament but i got the "Best Player of the Tournament" award.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Football;
