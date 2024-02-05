import React, { useState } from 'react'

export default function Search(props) {
    const [searchItem, setSearchItem] = useState("")

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
    }
      

    // const filteredItems =  props.countriesList.filter((country) =>
    // country.name.common.toLowerCase().includes(searchItem.toLowerCase())
    // );
    
   
   

  return (
    <div >
        
        {/* <input id="search"  placeholder='Search' value={searchItem} onChange={handleInputChange} ></input> */}

      {/* {searchItem === "" ? "" :  filteredItems.map((country, i) => <h2 key={i}>{country.name.common}</h2> )} */}
     

      
    </div>
  )
}
