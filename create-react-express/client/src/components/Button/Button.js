import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = (props) => (
  <button type="button" onClick={props.handleFormSubmit} className="btn btn-success">Submit</button>

);

export default Button;