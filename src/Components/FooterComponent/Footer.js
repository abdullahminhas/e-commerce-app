import React from "react";
import classes from "./Footer.module.css";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";
import dark from "./FooterDark.module.css";

function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  console.log("footer " + darkMode);
  return (
    <React.Fragment>
      <div
        className={darkMode == false ? `${classes.bgDark}` : `${dark.bgLight}`}
        style={{ padding: "10px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                {/* <div className={classes.footerIco}></div> */}
                <i
                  className={
                    darkMode == true
                      ? "fas fa-sync-alt text-dark px-2"
                      : "fas fa-sync-alt text-white px-2"
                  }
                ></i>
                <p
                  className={
                    darkMode == false
                      ? `${classes.footerHeadText}`
                      : `${dark.footerHeadText}`
                  }
                >
                  Track Your order
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                {/* <div className={classes.footerIco}></div> */}
                <i
                  className={
                    darkMode == true
                      ? "far fa-id-badge text-dark px-2"
                      : "far fa-id-badge text-white px-2"
                  }
                ></i>
                <p
                  className={
                    darkMode == false
                      ? `${classes.footerHeadText}`
                      : `${dark.footerHeadText}`
                  }
                >
                  Contact Us Anytime
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                {/* <div className={classes.footerIco}></div> */}
                <i
                  className={
                    darkMode == true
                      ? "fas fa-redo text-dark px-2"
                      : "fas fa-redo text-white px-2"
                  }
                ></i>
                <p
                  className={
                    darkMode == false
                      ? `${classes.footerHeadText}`
                      : `${dark.footerHeadText}`
                  }
                >
                  Return within 30 days
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                {/* <div className={classes.footerIco}></div> */}
                <i
                  className={
                    darkMode == true
                      ? "fas fa-truck-moving text-dark px-2"
                      : "fas fa-truck-moving text-white px-2"
                  }
                ></i>
                <p
                  className={
                    darkMode == false
                      ? `${classes.footerHeadText}`
                      : `${dark.footerHeadText}`
                  }
                >
                  Cash on delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className={
          darkMode == false ? `${classes.footer}` : `${dark.footerDark}`
        }
      >
        <div className="container">
          <div className="row">
            <div
              className={
                darkMode == false
                  ? `col-xl-3 col-lg-3 col-12 ${classes.infoSection}`
                  : `col-xl-3 col-lg-3 col-12 ${dark.infoSectionDark}`
              }
            >
              <h6>Get in Touch</h6>
              <p>House 5A, lorem ipsum, Isb</p>
              <p>Pakistan</p>
              <p>royal.threads@gmail.com</p>
            </div>
            <div
              className={
                darkMode == false
                  ? `col-xl-3 col-lg-3 col-12 ${classes.infoSection}`
                  : `col-xl-3 col-lg-3 col-12 ${dark.infoSectionDark}`
              }
            >
              <h6>Customer Care</h6>
              <p>Customer Care</p>
            </div>
            <div
              className={
                darkMode == false
                  ? `col-xl-3 col-lg-3 col-12 ${classes.infoSection}`
                  : `col-xl-3 col-lg-3 col-12 ${dark.infoSectionDark}`
              }
            >
              <h6>Information</h6>
              <p>Information</p>
            </div>
            <div
              className={
                darkMode == false
                  ? `col-xl-3 col-lg-3 col-12 ${classes.infoSection}`
                  : `col-xl-3 col-lg-3 col-12 ${dark.infoSectionDark}`
              }
            >
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
