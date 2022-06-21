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
      <span className={classes.line}></span>
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
          <div
            className="collapse navbar-collapse  position-relative"
            id="navbarNav"
          >
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
              <div
                className={`d-flex flex-row align-items-center ${classes.loc}`}
              >
                <div className="dropdown">
                  <button
                    className={`btn dropdown-toggle ${classes.menuBox}`}
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
                    className={`btn dropdown-toggle ${classes.menuBox}`}
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
                    className={`btn dropdown-toggle ${classes.menuBox}`}
                    type="button"
                    id="dropdownMenuCart"
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
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <span className={classes.line}></span>
    </div>
  );
};

export default Navbar;
