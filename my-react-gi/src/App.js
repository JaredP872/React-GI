import React from "react";
import BasicInfo from "./BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
