import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.cardImage}>
            <img src={value.img} />
            <div>
              <p className="card-title">{value.title}</p>
              <p className="card-price">{value.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
