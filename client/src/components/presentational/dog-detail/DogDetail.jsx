import React from "react";

const DogDetail = (props) => {
  return (
    <div className="dog-detail">
      <div className="image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="element-container">
        <div className="inner-elements">
          <h3>Breed: {props.name}</h3>
          <p><b>Life Span:</b> {props.life_span}</p>
          <p><b>Temperaments:</b> {props.temperament}</p>
          <p><b>Weight:</b> {props.weight} kgs</p>
          <p><b>Height:</b> {props.height} mts</p>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
