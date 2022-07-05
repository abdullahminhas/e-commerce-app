import React, { Component } from "react";
import Navbar from "../../Components/NavbarComponent/NavbarComponent";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      formIsValid: true,
    };
  }
  handleValidation = (e) => {
    console.log("validation " + e.target.value);
    if (e.target.value.match(/^(0|[1-9]\d*)$/)) {
      this.setState({ formIsValid: false });
    } else if (e.target.value === 0) {
      this.setState({ formIsValid: false });
    } else {
      this.setState({ formIsValid: true });
    }
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.hello.name);
    if (event.target.elements.hello.name === "lastName") {
      if (event.target.elements.hello.value.match(/^(0|[1-9]\d*)$/)) {
        this.setState({ formIsValid: false });
      } else if (event.target.elements.hello.value === 0) {
        this.setState({ formIsValid: false });
      } else {
        this.setState({ formIsValid: true });
      }
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form className="mt-5" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  id="hello"
                  className={
                    this.state.formIsValid === true
                      ? `form-control border-muted`
                      : `form-control border-danger`
                  }
                  placeholder="Last name"
                  aria-label="Last name"
                  name="lastName"
                  onChange={this.handleValidation}
                />
                {this.state.formIsValid === true ? (
                  ``
                ) : (
                  <span className="text-danger">Invalid Input</span>
                )}
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                  <input
                    className="btn btn-success w-100"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
