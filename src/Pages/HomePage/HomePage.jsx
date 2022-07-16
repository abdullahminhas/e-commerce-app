import React, { Component } from "react";
import classes from "./Home.module.css";
import Footer from "../../Components/FooterComponent/Footer";
import Navbar from "../../Components/NavbarComponent/NavbarComponent";
import img from "../../assets/clothes.jpeg";
import img2 from "../../assets/clothes2.jpeg";
import Card from "../../Components/CardComponent/CardComponent";
// import CardData from "../../Components/CardComponent/CardData";
import dark from "./HomeDark.module.css";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";
import kurtaOne from "../../assets/kurtaOne.jpg";
import kurtaTwo from "../../assets/kurtaTwo.jpg";
import kurtaThree from "../../assets/kurtaThree.jpeg";

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
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-3">sidebar</div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
