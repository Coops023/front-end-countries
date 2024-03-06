import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);
    //test to check if input field is empty as im having an issue with resetting the list when it is empty
    props.callback();
  };


  useEffect(() => {
    props.callback(searchQuery);
  }, [searchQuery]);


  return (
    <div>
      <input onChange={handleInputChange} placeholder="search countries" />
    </div>
  );
}
