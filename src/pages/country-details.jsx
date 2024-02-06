import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export default function CountryDetails() {
  const [country, setCountry] = useState([])
  const {name} = useParams()
  
  useEffect( () => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then(response => 
     response.json())
    .then(data => 
         {
          console.log(data)
          setCountry(data)
         }
       );
       console.log('i fire once')
       }, []);

  return (
    <div>country-details</div>
  )
}
