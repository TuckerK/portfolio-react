import React from "react";
import apps from "../../apps.json";
import "./Cards.css";

const Card = props => {
  return(
    <div>
      {props.name}
    </div>
  );
};

export default Card;
