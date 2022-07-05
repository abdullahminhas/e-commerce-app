import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./NavbarComponent.module.css";
import dark from "./DarkNav.module.css";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";

const Navbar = (props) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  function handleChange() {
    toggleDarkMode();
  }

  return (
    <div
      className={
        darkMode == true
          ? `d-flex flex-column ${dark.bgDark}`
          : "d-flex flex-column"
      }
    >
      <div className="text-center ">
        <h2
          className={
            darkMode == true ? `${dark.brandTitle}` : `${classes.brandTitle}`
          }
        >
          <a href="#">Royal Traders</a>
        </h2>
        <label className={darkMode == true ? "text-light" : "text-dark"}>
          <input
            type={"checkbox"}
            className={`me-2 ${classes.toggleButton}`}
            value="check"
            onChange={handleChange}
          />
        </label>
      </div>
      <span
        className={darkMode == true ? `${dark.line}` : `${classes.line}`}
      ></span>
      <nav
        className={
          darkMode == true
            ? "navbar py-0 navbar-expand-lg navbar-dark"
            : "navbar py-0 navbar-expand-lg navbar-light"
        }
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  position-relative"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? darkMode == true
                        ? `nav-link ${dark.selected}`
                        : `nav-link ${classes.selected}`
                      : "nav-link"
                  }
                  end
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? darkMode == true
                        ? `nav-link ${dark.selected}`
                        : `nav-link ${classes.selected}`
                      : "nav-link"
                  }
                  end
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? darkMode == true
                        ? `nav-link ${dark.selected}`
                        : `nav-link ${classes.selected}`
                      : "nav-link"
                  }
                  end
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <div
                className={`d-flex flex-row align-items-center ${classes.loc}`}
              >
                <div className="dropdown">
                  <button
                    className={
                      darkMode == true
                        ? `btn dropdown-toggle ${dark.menuBox}`
                        : `btn dropdown-toggle ${classes.menuBox}`
                    }
                    type="button"
                    id="dropdownMenuAcc"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    A
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg-end p-4 text-muted"
                    style={{ maxWidth: "400px" }}
                  >
                    <p>
                      Some example text that's free-flowing within the dropdown
                      menu.
                    </p>
                    <p className="mb-0">And this is more example text.</p>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className={
                      darkMode == true
                        ? `btn dropdown-toggle ${dark.menuBox}`
                        : `btn dropdown-toggle ${classes.menuBox}`
                    }
                    type="button"
                    id="dropdownMenuFav"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    F
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg-end p-4 text-muted"
                    style={{ maxWidth: "400px" }}
                  >
                    <p>
                      Some example text that's free-flowing within the dropdown
                      menu.
                    </p>
                    <p className="mb-0">And this is more example text.</p>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className={
                      darkMode == true
                        ? `btn dropdown-toggle ${dark.menuBox}`
                        : `btn dropdown-toggle ${classes.menuBox}`
                    }
                    type="button"
                    id="dropdownMenuCart"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    C
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg-end p-4 text-muted"
                    style={{ maxWidth: "400px" }}
                  >
                    <p>
                      Some example text that's free-flowing within the dropdown
                      menu.
                    </p>
                    <p className="mb-0">And this is more example text.</p>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <span
        className={darkMode == true ? `${dark.line}` : `${classes.line}`}
      ></span>
    </div>
  );
};

export default Navbar;
