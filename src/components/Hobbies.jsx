import React from 'react'
import {Link} from 'react-router-dom';

const dummyDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias atque similique eius provident magni perferendis sint corporis quasi, dolor illum quae consequuntur cumque voluptate. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. ";

const HobbiesCard = ({name, img}) => {

    return (
      <div className="hobby">
        <div className="hobbyImg">
          <img src={img} alt="Hobby" />
        </div>
        <div className="hobbyText">
          <h2>{name}</h2>
          <Link to={`/about/${name}`} className="hobbies-button">Learn More</Link>
          
        </div>
      </div>
    );
  };

export default HobbiesCard;