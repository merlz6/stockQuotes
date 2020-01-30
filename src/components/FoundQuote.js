import React from "react";
import "../App.css";

function FoundQuote(props) {

  return (
<div>
  <div className="quoteCard">
    <img src={props.quote.profile.image} className="companyImage"/>
    <h4>Ticker: {props.quote.symbol}</h4>
    <h4>Price: ${props.quote.profile.price}</h4>
    <h4>Market Cap: ${props.quote.profile.mktCap}</h4>
    <h4>Company Name: {props.quote.profile.companyName}</h4>
    {props.quote.profile.changes < 0 ? <h4 className="red">Price Change: {props.quote.profile.changes}</h4> : <h4 className="green">Price Change: {props.quote.profile.changes}</h4> }
    {props.quote.profile.changesPercentage < 0 ? <h4 className="red">Percentage Change: {props.quote.profile.changesPercentage}</h4> : <h4 className="green">Percentage Change: {props.quote.profile.changesPercentage}</h4> }
    <h4>Market: {props.quote.profile.exchange}</h4>
    <p>Description: {props.quote.profile.description}</p>
  </div>
</div>
  );
}

export default FoundQuote;
