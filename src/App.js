import React from "react";
import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Nairobi" />
    </div>
  );
}

export default App;
