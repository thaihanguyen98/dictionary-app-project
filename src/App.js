import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="hello" />
      <footer className="App-footer">
        {" "}
        <a href="https://github.com/thaihanguyen98/dictionary-app-project">
          <i class="fa-brands fa-github"></i> Open-source code{" "}
        </a>
        by Thai Ha Nguyen
      </footer>
    </div>
  );
}

export default App;
