import React from "react";
import "./cardList.css";

import Card from "../card";

const CardList = props => {
  //console.log(props);
  return (
    <div className="card-list">
      {props.employeesProp.map(employee => {
        return <Card key={employee.id} employeeProp={employee} />;
      })}
    </div>
  );
};

export default CardList;
