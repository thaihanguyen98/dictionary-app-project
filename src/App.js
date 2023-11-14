import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Thai Ha Nguyen</footer>
      </div>
    </div>
  );
}

export default App;
