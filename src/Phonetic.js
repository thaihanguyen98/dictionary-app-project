import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic d-flex justify-content-start">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen <i class="fa-solid fa-volume-high"></i>
      </a>
      <br />
      <p className="texts">{props.phonetic.text}</p>
    </div>
  );
}
