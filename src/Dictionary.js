import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "cH1mNp4CJdOZp8DLOT6cQHKHxr3fN3tgIZwmfgeXJa0bQBvuZ3GFgnkn";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header className="App-header">
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
          <div className="header-body">
            <h1>Dictionary</h1>
            <h2 className="mb-3">What word do you want to look up?</h2>
            <div className="search-form">
              <form className="input-group" onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
              </form>
            </div>
            <div className="hint">
              suggested words: sunset, coding, yoga, plants...
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <Results results={results} />
            <Photos photos={photos} />
          </div>
        </main>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
