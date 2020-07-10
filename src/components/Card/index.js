import React from "react";
import "./style.css";

function Card(props) {
    return (
    <div className="img-card" onClick={() => props.click(props.id)} >
        <img alt={props.name} src= {props.image} />
    </div>
  );
}

export default Card;