import { NavLink } from "react-router-dom";
import classes from "./NavbarComponent.module.css";

const Navbar = (props) => {
  return (
    <div className="d-flex flex-column">
      <div>
        <h2 className={`text-center ${classes.brandTitle}`}>
          <a href="#">Royal Traders</a>
        </h2>
      </div>
      <div className={classes.line}></div>
      <nav className="navbar py-0 navbar-expand-lg navbar-light">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `nav-link ${classes.selected}` : "nav-link"
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
                    isActive ? `nav-link ${classes.selected}` : "nav-link"
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
                <a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={classes.line}></div>
    </div>
  );
};

export default Navbar;
