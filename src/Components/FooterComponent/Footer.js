import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-12 info-section">
                            <h6>Get in Touch</h6>
                            <p>House 5A, lorem ipsum, Isb</p>
                            <p>Pakistan</p>
                            <p>royal.threads@gmail.com</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-12 info-section">
                            <h6>Customer Care</h6>
                            <p>Customer Care</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-12 info-section">
                            <h6>Information</h6>
                            <p>Information</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-12 info-section">
                            <h6>Subscribe</h6>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;