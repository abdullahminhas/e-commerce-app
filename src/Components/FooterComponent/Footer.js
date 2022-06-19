import React from "react";
import classes from "./Footer.module.css";

function Footer() {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "black", padding: "10px 0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                {/* <div className={classes.footerIco}></div> */}
                                <i class="fas fa-sync-alt text-white px-2"></i>
                                <p className={classes.footerHeadText}>Track Your order</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                {/* <div className={classes.footerIco}></div> */}
                                <i class="far fa-id-badge text-white px-2"></i>
                                <p className={classes.footerHeadText}>Contact Us Anytime</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                {/* <div className={classes.footerIco}></div> */}
                                <i class="fas fa-redo text-white px-2"></i>
                                <p className={classes.footerHeadText}>Return within 30 days</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                {/* <div className={classes.footerIco}></div> */}
                                <i class="fas fa-truck-moving text-white px-2"></i>
                                <p className={classes.footerHeadText}>Cash on delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={classes.footer}>
                <div className="container">
                    <div className="row">
                        <div className={`col-xl-3 col-lg-3 col-12 ${classes.infoSection}`}>
                            <h6>Get in Touch</h6>
                            <p>House 5A, lorem ipsum, Isb</p>
                            <p>Pakistan</p>
                            <p>royal.threads@gmail.com</p>
                        </div>
                        <div className={`col-xl-3 col-lg-3 col-12 ${classes.infoSection}`}>
                            <h6>Customer Care</h6>
                            <p>Customer Care</p>
                        </div>
                        <div className={`col-xl-3 col-lg-3 col-12 ${classes.infoSection}`}>
                            <h6>Information</h6>
                            <p>Information</p>
                        </div>
                        <div className={`col-xl-3 col-lg-3 col-12 ${classes.infoSection}`}>
                            <h6>Subscribe</h6>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Footer;
