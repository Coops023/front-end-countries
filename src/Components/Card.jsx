import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        className="flag"
        alt="countryFlags"
        src={props.countryData.flags.png}
      ></img>
      <div className="text-wrap">
        <h2 className="country-name">{props.countryData.name.common}</h2>
        <p className="population">{props.countryData.population}</p>
        <p className="region">{props.countryData.region}</p>
        <p className="capitol">{props.countryData.capital}</p>
      </div>
    </div>
  );
}
