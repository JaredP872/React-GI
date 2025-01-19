import React from "react";

const BasicInfo = (props) => {
  const { FirstName, LastName, phone, dateOfBirth } = props.person;

  return (
    <div>
      <h2>Basic information</h2>
      <p>First name: {FirstName}</p>
      <p>Last name: {LastName}</p>
      <p>Phone: {phone}</p>
      <p>Date of birth: {dateOfBirth} </p>
    </div>
  );
};

export default BasicInfo;
