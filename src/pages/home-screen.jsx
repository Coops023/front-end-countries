
import './home-screen.css';
import React, {useState, useEffect, createContext } from 'react';
import Card from '../Components/Card';
import Search from '../Components/Search';
import Filter from '../Components/Filter';
import { Link } from 'react-router-dom';

export const ThemeContext = createContext(null)


function App() {
  const [countries, setCountries] = useState([])  
  const [theme, setTheme] = useState("light")
  const [searchInput, setSearchInput] = useState(false)
  const [region, setRegion] = useState([])
  const [showFilteredCountries, setShowFilteredCountries] = useState(false)
  const [showAllCountries, setShowAllCountries] = useState(true)
  const [showSearchedCountries, setShowSearchedCountries] = useState(false)
  const id = 2



   const callBackFilter = (data)=>{
    console.log("callback from filter comp" ,data)
    setRegion(data)
    setShowFilteredCountries(true)
  }

  const toggleTheme = () =>{
    setTheme((currentTheme)=> (currentTheme === "light" ? "dark" : "light"))
  }



  useEffect( () => {
   fetch('https://restcountries.com/v3.1/all')
   .then(response => 
    response.json())
   .then(data => 
        {
          setCountries(data)
         
        }
      );
      }, []);

      console.log('is there a loop')

  return (
    <div className="App" id={theme}>
      <button onClick={toggleTheme}>Change theme</button>
      <Search ></Search>
      <Filter  callBack={callBackFilter}></Filter>
      <h2>hello</h2>
      <Link to={`/countryDetails/${id}`}>Your Name</Link>
      
      {
        showFilteredCountries === true ?  region.map((post, i) => {
          return (
            <div>
             <Card className="post-card" key={i} countryData={post}></Card>
             </div>
             
          );
       }) : <></>
      }

      { 
      showAllCountries === true ?  countries.map((post, i) => {
        return (
          <Link to={`/countryDetails/${post.name.common}`}>
           <Card  key={i} className="post-card"  countryData={post}>
             
           </Card>
           </Link>
           
          
        );
     }) : <></>

      }
      </div>
   
  );
}

export default App;

