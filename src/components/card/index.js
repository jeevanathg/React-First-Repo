import React from "react";

import './styles.css'

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="props.employeeProp.name"
        src={`https://robohash.org/${props.employeeProp.id}?set=set5`}
      />
      <h2>{props.employeeProp.name}</h2>
      <p>{props.employeeProp.email}</p>
    </div>
  );
};

export default Card;
