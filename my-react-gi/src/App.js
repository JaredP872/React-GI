// Imports the react library that we need in order to create and use react components.
import React from "react";
// Imports the basic Info components from the BasicInfo.js file.
import BasicInfo from "./BasicInfo";

// Declares a class based react component named App that extends React.component. This is needed to manage this.state
class App extends React.Component {
  // Declares the construtor method for the App component used to initialize state and set up the component. The constructor is required to initialize the components this.state and super(props)
  constructor(props) {
    // Calls the parent class(React.Component) constructor with props. This ensures that the props onject is correclty passed to the parent class, allowing this.props to work properly.
    super(props);
    // Initializes the state object of the App component with a people array containing details of multiple peoples information. The state is where the components data is stored. The people array will be iterated over to render individual BasicInfo components.
    this.state = {
      // stores an array of objects where each object represents a person with properties. Such as: FirstName, LastName, Phone, and DateOfBirth.
      people: [
        {
          FirstName: "Jared",
          LastName: "Proctor",
          Phone: "980 - 616 - 1804",
          DateOfBirth: "08/28/2004",
        },
        {
          FirstName: "Jane",
          LastName: "Tessa",
          Phone: "704 - 820 - 2811",
          DateOfBirth: "02/25/2000",
        },
        {
          FirstName: "Mark",
          LastName: "Fredd",
          Phone: "980 - 272 - 2829",
          DateOfBirth: "03/17/1998",
        },
        {
          FirstName: "Jake",
          LastName: "Jackson",
          Phone: "980 - 382 - 9302",
          DateOfBirth: "04/02/2010",
        },
        {
          FirstName: "Riley",
          LastName: "Spandenburg",
          Phone: "704 - 938 - 2939",
          DateOfBirth: "10/02/1985",
        },
      ],
    };
  }
  // Declares the render method which defines what the App component will display on the screen. The render method is required in every class based react component. It returns JSX (HTML like syntax for React)
  render() {
    return (
      // The outer container for the components UI. React components need to return a single root element. This div serves as that root element.
      <div>
        {/* Displays the heading Contacts on the UI */}
        <h1>Contacts</h1>
        {/* Iterates over the people array in this.state using the map(function). The steps this part of my code takes: Creates a BasicInfo component for each person, passes the person object as a prop and adds a key prop to uniquely identify each component in the list.*/}
        {this.state.people.map((person, index) => (
          // Creates an instance of the BasicInfo component for each person in the people array. Then passes the person object as a prop to the component. Once that's complete the key prop is added for React to efficiently update the DOM when the list changes. This is needed to display each persons details using the resuable BasicInfo component.
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

// exports the app component as the default export of this file.
export default App;
