import React, { Component } from 'react';
import './App.css';
let cardOuterStyle = {margin: '1em'};
let cardInnerStyle = {display:'inline-block', marginLeft: 10, };
let cardFont = {fontSize:'1.25em', fontWeight: 'bold'};

const Card = (props) =>{
  return (
      <div style={cardOuterStyle}>
        <img alt="" src={props.avatar_url} height='100' width = '100'/>
        <div style={cardInnerStyle}>
          <div style={cardFont}>{props.name}</div>
          <div> {props.company}</div>
        </div>
      </div>

    )
}

const CardList = (props)=>{
  return(
      <div>
        {props.cards.map(card=> <Card {...card} />)}
      </div>
    )
}

export default CardList;
