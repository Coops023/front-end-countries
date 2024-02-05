import React, { useEffect, useState } from 'react'

export default function Filter(props) {

    
    const changeHandler = async (e) =>{
        const value = e.target.value
      await props.callBack(value)
       fetch('https://restcountries.com/v3.1/region/africa')
       .then(response => 
        response.json())
       .then(data => 
            {
              console.log(data)
            }
          );
    }
    
  
  return (
    <div>
        <label for="Countries">Choose a country:</label>

        <select onChange={changeHandler} name="Countries" id="Countries">
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        </select>
    </div>
  )
}
