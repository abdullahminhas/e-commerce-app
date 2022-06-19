import React, { Component } from "react";
import classes from "./Home.module.css";
import Footer from "../../Components/FooterComponent/Footer";
import Navbar from "../../Components/NavbarComponent/NavbarComponent";
import img from "../../assets/clothes.jpeg";
import img2 from "../../assets/clothes2.jpeg";
import Card from "../../Components/CardComponent/Card";
import CardData from "../../Components/CardComponent/CardData";

const Home = () => {
  return (
    <div>
      <Navbar />
      Home
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
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
              class={`d-block w-100 ${classes.carouselImg}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              class={`d-block w-100 ${classes.carouselImg}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img}
              class={`d-block w-100 ${classes.carouselImg}`}
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
      <div>
        <h4 className="text-uppercase text-center">Trending - Categories</h4>
        <div className="home-cards">
          <Card details={CardData} />
        </div>
        <h4 className="text-uppercase text-center">Shop By Categories</h4>
        <div className="home-cards">
          <Card details={CardData} />
        </div>
        <h4 className="text-uppercase text-center">Discover</h4>
        <div className="home-cards">
          <Card details={CardData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
