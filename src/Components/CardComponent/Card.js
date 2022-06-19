import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={value.img} />
                        <div>
                            <p className="card-title">{value.title}</p>
                            <p className="card-price">{value.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;