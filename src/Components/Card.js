import React, { useContext } from 'react';
import { IMAGES_ROOT_PATH } from '../Constants';
import { store } from "../Store/store.js";

import Stats from './Stats';
import '../Styles/Description.css';
import '../Styles/Card.css';

function Card(props) {
  const globalState = useContext(store).state;
  const { dispatch } = useContext(store);

  function updateCardSelected(cardIndex) {
    dispatch({
      type: "updateCardSelected",
      selectedCardIndex: cardIndex
    });
  }

  return (
    
    <div className={globalState.selectedCardIndex===props.cardIndex?"card card-selected":"card"} onClick={() => updateCardSelected(props.cardIndex)}>
  
      <div className="image-container">
          <img src={require("../assets/images/" + props.activityImage)} alt="activityImage" className="activity-image"/>
      </div>

      <div className="description-container">
        <img src={require("../assets/images/" + props.trainerImage)} alt="trainerImage" className="trainer-image"/>
        <span className="description">{ props.title }</span>
        
        <br/>
        <Stats timeLength={props.timeLength} meterLength={props.meterLength} cardIndex={props.cardIndex}/>
        <br/>

        { 
        globalState.selectedCardIndex===props.cardIndex ? <span className="view-details">VIEW DETAILS</span> : null
        }

      </div>
    </div>
    
  );
}

export default Card;