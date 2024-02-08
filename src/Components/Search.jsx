import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export default function Search(props) {
    const [searchQuery, setSearchQuery] = useState("")
   

    const handleInputChange = (e) => { 
      console.log(e.target.value)
      const searchTerm = e.target.value;
      setSearchQuery(searchTerm)
      //test to check if input field is empty as im having an issue with resetting the list when it is empty
      if (searchQuery.trim().length !== 0) {
        console.log('input value is NOT empty');
      } else {
        console.log('input value is empty');
      }
    }
      
useEffect(()=>{
  const filteredItems =  props.countriesList.filter((country) =>
  country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );
     props.callback(filteredItems)
}, [searchQuery])

    

   

  return (
    <div >
        
     <input  onChange={handleInputChange} placeholder='search countries'/>
     

      
    </div>
  )
}
