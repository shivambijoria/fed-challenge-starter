import React from 'react';
import Card from './Card';

import '../Styles/Dashboard.css';

function DashBoard() {
  const cardCollectionData = [
  {
    title:"Lake Inniscarra, Ireland—Pyramid",
    activityImage:"lake-inniscarra-thumb.jpg",
    trainerImage:"lake-inniscarra-trainer.jpg",
    timeLength:"30:53",
    meterLength:"6,248M"
  },
  {
    title:"Performance Series",
    activityImage:"performance-series-thumb.jpg",
    trainerImage:"performance-series-trainer.jpg",
    timeLength:"",
    meterLength:""
  },
  {
    title:"Slow Pulls and Fast Intervals",
    activityImage:"slow-pulls-thumb.jpg",
    trainerImage:"slow-pulls-trainer.jpg",
    timeLength:"44:13",
    meterLength:"9,948M"
  },
  {
    title:"20 Minutes to Toned",
    activityImage:"20-minutes-to-toned-thumb.jpg",
    trainerImage:"20-minutes-to-toned-trainer.jpg",
    timeLength:"",
    meterLength:""
  },
  {
    title:"Charles Race, Boston, Massachusetts",
    activityImage:"charles-race-thumb.jpg",
    trainerImage:"charles-race-trainer.jpg",
    timeLength:"36:22",
    meterLength:"8,648M"
  },
  {
    title:"Full-Body HIIT Series",
    activityImage:"full-body-hiit-thumb.jpg",
    trainerImage:"full-body-hiit-trainer.jpg",
    timeLength:"",
    meterLength:""
  },
  {
    title:"Kafue River, Zambia—Power Stroke",
    activityImage:"kafue-river-thumb.jpg",
    trainerImage:"kafue-river-trainer.jpg",
    timeLength:"22:22",
    meterLength:"4,660M"
  },
  {
    title:"Shred & Burn Series",
    activityImage:"shred-and-burn-thumb.jpg",
    trainerImage:"shred-and-burn-trainer.jpg",
    timeLength:"",
    meterLength:""
  }
  ];
  const cardCollection = cardCollectionData.map( (card, index) => 
  <Card title={card.title} activityImage={card.activityImage} trainerImage={card.trainerImage} timeLength={card.timeLength}
   meterLength={card.meterLength} cardIndex={index} key={index}/>
  )
  return (
    <div className="card-container">
      {cardCollection}
    </div>
  );
}

export default DashBoard;