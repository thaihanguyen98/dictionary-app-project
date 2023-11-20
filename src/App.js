import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="tab-bar d-flex justify-content-between ">
          <div className="d-flex align-self-center">
            <i class="fa-solid fa-file"></i>
            <p>http://thaiha-dictionary.app</p>
          </div>
          <div className="align-items-center">
            <i class="fa-solid fa-window-minimize"></i>
            <i class="fa-regular fa-window-restore"></i>
            <i class="fa-regular fa-rectangle-xmark"></i>
          </div>
        </div>
      </header>
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
