import React, { useEffect, useState, useRef } from "react";
import "../styles/App.css";

let cups = 8;
let cupCapacity = 250;

const BigCup = () => {
  return (
    <div className="cup">
      <div className="remained" id="remained" ref={remained}>
        <span id="liters" ref={liters}></span>
        <small>Remained</small>
      </div>
      <div className="percentage" id="percentage" ref={percentage}></div>
    </div>
  );
};

const SmallCup = () => {
  return (
    <div
      onClick={clickHandler}
      className={`cup cup-small ${false ? "full" : ""}`}
    >
      {"150"} ml
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <BigCup />
      <p className="text">
        Select how many glasses of water that you have drank
      </p>

      <div className="cups">
        {/* Add a loop to loop over all the cups */}
        <SmallCup />
      </div>
    </div>
  );
};

export default App;
