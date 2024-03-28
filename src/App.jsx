import './App.css';
import { useState, createContext } from 'react';
import Card from './Components/Card';
import Search from './Components/Search';
import Filter from './Components/Filter';
import { Link } from 'react-router-dom';

import useResults from './hooks/useResults';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const [searchQuery, setSearchQuery] = useState('');
  const [continent, setContinent] = useState('all');

  const id = 2;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const filteredCountries = useResults(continent, searchQuery);

  return (
    <div className="App" id={theme}>
      <button onClick={toggleTheme}>Change theme</button>
      <Search query={searchQuery} onChange={setSearchQuery} />
      <Filter continent={continent} onChangeContinent={setContinent} />
      <h2>hello</h2>
      <Link to={`/countryDetails/${id}`}>country details</Link>
      <a href="error">error page test</a>

      {filteredCountries.map((country) => (
        <Link key={country.cioc} to={`/countryDetails/${country.name.common}`}>
          <Card className="post-card" countryData={country}></Card>
        </Link>
      ))}
    </div>
  );
}

export default App;
