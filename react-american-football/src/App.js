
// //////////////////////////////////////////////////////////////////////////////////
//TODO: STEP 1 - Import the useState hook.

import React, { useState } from 'react';


import "./App.css";
import BottomRow from "./BottomRow";

// const [value, setValue] = useState();


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // Declare a new state variable
  //   const [reset, updateScore] = useState(0);
  const [value, setInitialValue] = useState(0);
  const [scoreLions, setLions] = useState(32);
  const [scoreTigers, setTigers] = useState(32);
  //   most common 
  // const [state, setState] = useState()

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreLions}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreTigers}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown" onClick={() => updateScore(value + 7)}>Home Touchdown</button> */}
          {/* <button className="homeButtons__fieldGoal" onClick={() => updateScore(value + 3)}>Home Field Goal</button> */}
          <button className="homeButtons__touchdown" onClick={() => setLions(scoreLions + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLions(scoreLions + 3)}>Home Field Goal</button>
          <button onClick={() => setLions(32)}>Reset</button>
          <button onClick={() => setInitialValue(0)}>Reset/zero</button>

        </div>
        <div className="awayButtons">
          {/* <button className="awayButtons__touchdown" onClick={() => updateScore(value + 7)}>Away Touchdown</button> */}
          {/* <button className="awayButtons__fieldGoal" onClick={() => updateScore(value + 3)}>Away Field Goal</button> */}
          <button className="awayButtons__touchdown" onClick={() => setTigers(scoreTigers + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigers(scoreTigers + 3)}>Away Field Goal</button>
          <button onClick={() => setTigers(32)}>Reset</button>
          <button onClick={() => setInitialValue(0)}>Reset/zero</button>
        </div>
      </section>
    </div>
  );
}

export default App;
