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
       ).catch(error => {
        console.log("Error fetching country data", error)
       })
       
       }, [name]);

  return (
    
 <div>
  
    {country ?  <div>country</div> : <p>Loading</p> }
  
 </div>
 
  )
}
