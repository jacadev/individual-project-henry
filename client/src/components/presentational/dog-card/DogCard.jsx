import React from "react";
import { Link } from "react-router-dom";

const DogCard = (props) => {
  return (
    <div className="dog-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <h5>Temperaments</h5>
      <p className="temperament" >{props.temperament}</p>
      <h6>Weight</h6>
      <p className="weight" >{props.weight}</p>
      <Link to={`/detail/${props.id}`}>
        <button>View Detail</button>
      </Link>
    </div>
  );
};

export default DogCard;
