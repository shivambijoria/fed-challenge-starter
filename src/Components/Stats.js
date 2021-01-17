import React, { useContext } from 'react';
import { store } from "../Store/store.js";

import '../Styles/Stats.css';

function Stats(props) {
  const globalState = useContext(store).state;

  return (
    <div className="stats">
        <span class="stats-section">
            {
            props.timeLength ? 
            <img src={require("../assets/images/" + "watch-time-icon.png")} alt="watch-time-icon" className="small-icons"/>
            : null
            }
            <span className="time-and-distance-info">{ props.timeLength }</span>
        </span>
        <span class="stats-section">
            {
            props.meterLength ? 
            <img src={require("../assets/images/" + "icn_distance_line.png")} alt="icn_distance_line" className="small-icons"/>
            : null
            }
            <span className="time-and-distance-info">{ props.meterLength }</span>
        </span>
    </div>
  );
}

export default Stats;