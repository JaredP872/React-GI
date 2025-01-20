// Imports the react library that we need in order to create and use react components.
import React from "react";
// Imports my BasicInfo.css file allowing me to style my components.
import "./BasicInfo.css";

// Declares a component called BasicInfo
const BasicInfo = (props) => {
  // I'm using destructoring in order to extract specific preoperties that I want from props.person.
  const { FirstName, LastName, Phone, DateOfBirth } = props.person;
  // returns JSX which defines the structure and content of the user interface for this component.
  return (
    // The className allows me to style this component with my BasicInfo.css file. This div container also serves as the container for my Basic information content.
    <div className="basic-info">
      {/* Renders a h2 element on the UI that stores the text Basic information */}
      <h2>Basic information</h2>
      {/* The p elements do the same as the h2 elements but for paragraphs instead of h2 */}
      <p>First name: {FirstName}</p>
      <p>Last name: {LastName}</p>
      <p>Phone: {Phone}</p>
      <p>Date of birth: {DateOfBirth} </p>
    </div>
  );
};

// exports the BasicInfo component as the default export on this file. This makes the component reasuable and allows files to imprt it by using: import BasicInfo from "./BasicInfo"
export default BasicInfo;
