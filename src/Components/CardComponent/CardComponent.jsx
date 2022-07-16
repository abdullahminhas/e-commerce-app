import React, { Component } from "react";
import img from "../../assets/image 24.png";
import classes from "./CardComponentLight.module.css";

class CardComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`card ${classes.ProductCard}`}>
          <div className="card-body">
            <div className="position-relative">
              <img
                src={img}
                className="mb-1"
                style={{ width: "100%", height: "80%", objectFit: "auto" }}
              />
              <div className={classes.ProductCardActionSection}>
                <button
                  className={`btn ${classes.ProductCardFavouriteWrapper}`}
                >
                  <i class="fa fa-heart"></i>
                </button>
                <button
                  className={`btn ${classes.ProductCardFavouriteWrapper}`}
                >
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
              <span className={classes.ProductCardbadgeNew}>NEW</span>
            </div>
            <p className={classes.ProductCardTitle}>
              Madiha 01-Euphoria Festive 3-PC Lawn Suit
            </p>
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
              <p className={classes.ProductCardPrice}>Rs 8,990 PKR</p>
              <span className={classes.ProductCardbadge}>50% OFF</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <i class={`fa fa-star ${classes.ProductCardRatingStarColor}`}></i>
              <i class={`fa fa-star ${classes.ProductCardRatingStarColor}`}></i>
              <i class={`fa fa-star ${classes.ProductCardRatingStarColor}`}></i>
              <i class={`fa fa-star ${classes.ProductCardRatingStarColor}`}></i>
              <i class={`fa fa-star ${classes.ProductCardRatingStarColor}`}></i>
              <span className={`ms-2 ${classes.ProductCardRating}`}>4.87</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardComponent;
