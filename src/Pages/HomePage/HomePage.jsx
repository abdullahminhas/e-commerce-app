import React, { Component } from "react";
import classes from "./Home.module.css";
import Footer from "../../Components/FooterComponent/Footer";
import Navbar from "../../Components/NavbarComponent/NavbarComponent";
import img from "../../assets/clothes.jpeg";
import img2 from "../../assets/clothes2.jpeg";
import Card from "../../Components/CardComponent/Card";
import CardData from "../../Components/CardComponent/CardData";
import dark from "./HomeDark.module.css";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `${dark.bgDark}` : ""}>
      <Navbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img}
              className={`d-block w-100 ${classes.carouselImg}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className={`d-block w-100 ${classes.carouselImg}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img}
              className={`d-block w-100 ${classes.carouselImg}`}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="headings">
        <h4 className={darkMode === true
          ? "text-white text-center text-uppercase"
          : "text-dark text-center text-uppercase"}>Trending - Categories</h4>
        <div className={darkMode === true ? "text-white text-center" : "text-dark text-center"}{...`${classes.homeCards} ${classes.cardsSection}`}>
          <Card details={CardData} />
        </div>
        <h4 className={darkMode === true
          ? "text-white text-center text-uppercase"
          : "text-dark text-center text-uppercase"}>Shop By Categories</h4>
        <div className={darkMode === true ? "text-white text-center" : "text-dark text-center"}{...`${classes.homeCards} ${classes.cardsSection}`}>
          <Card details={CardData} />
        </div>
        <h4 className={darkMode === true
          ? "text-white text-center text-uppercase"
          : "text-dark text-center text-uppercase"}>Discover</h4>
        <div className={darkMode === true ? "text-white text-center" : "text-dark text-center"}{...`${classes.homeCards} ${classes.cardsSection}`}>
          <Card details={CardData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
