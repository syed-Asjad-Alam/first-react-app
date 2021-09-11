import React from 'react';
import './mediaCard.css';

const MediaCard = ({title,body,imageUrl}) => {
  return <div>
    <h4>Media Card Task :</h4>
    <h5>{title}</h5>
    <p>{body}</p>
    <img className="pic" src= {imageUrl}/>
  </div>
}

export default MediaCard;