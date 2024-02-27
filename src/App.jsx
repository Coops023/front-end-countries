import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import Card from './Components/Card';
import Search from './Components/Search';
import Filter from './Components/Filter';
import { Link } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState([]);
  const [showFilteredCountries, setShowFilteredCountries] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(true);
  const id = 2;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const callBackFilter = (data) => {
    // console.log("callback from filter comp" ,data)
    setRegion(data);
    setShowAllCountries(false);
    setShowFilteredCountries(true);
  };

  // im having an issue here when the search bar is empty i want the original list of countries i call from the API to show
  // the whole search function doesnt work well, wondering if it should search when i submit rather than filtering the array as i enter into the input
  const callBackSearch = (data) => {
    console.log('data from search', data);
    setSearchQuery(data);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // console.log("all countries", showAllCountries)
  // console.log("region", showFilteredCountries)
  // console.log("searched", showSearchedCountries)

  return (
    <div className="App" id={theme}>
      <button onClick={toggleTheme}>Change theme</button>
      <Search callback={callBackSearch} countriesList={countries}></Search>
      <Filter callBack={callBackFilter}></Filter>
      <h2>hello</h2>
      <Link to={`/countryDetails/${id}`}>country details</Link>
      <a href="error">error page test</a>

      {showFilteredCountries === true ? (
        region.map((post, i) => {
          return (
            <Link to={`/countryDetails/${post.name.common}`}>
              <Card className="post-card" key={i} countryData={post}></Card>
            </Link>
          );
        })
      ) : (
        <></>
      )}

      {showAllCountries === true ? (
        countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery),
          )
          .map((post, i) => {
            return (
              <Link to={`/countryDetails/${post.name.common}`}>
                <Card key={i} className="post-card" countryData={post}></Card>
              </Link>
            );
          })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
