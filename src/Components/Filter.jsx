import React, { useEffect, useState } from 'react'

export default function Filter(props) {

    
    const changeHandler = (e) =>{
        const value = e.target.value
        props.callBack(value)
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
