import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          <li key="relativeListItem1">Batman</li>
          <li key="relativeListItem2">Superman</li>
          <li key="relativeListItem3">Heman</li>
        </ol>
      </div>
    );
  }
}

export default App;
