import React, { useEffect, useState } from 'react';

export default function Filter(props) {
  const changeHandler = async (e) => {
    const value = e.target.value;

    fetch(`https://restcountries.com/v3.1/region/${value}`)
      .then((response) => response.json())
      .then((data) => {
        props.callBack(data);
      });
  };

  return (
    <div>
      <label for="Countries">Choose a country:</label>

      <select onChange={changeHandler} name="Countries" id="Countries">
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
      </select>
    </div>
  );
}
