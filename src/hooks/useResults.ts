import { useEffect, useMemo, useState } from 'react';

export default function useResults(continent, searchQuery) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url =
      continent === 'all'
        ? 'https://restcountries.com/v3.1/all'
        : `https://restcountries.com/v3.1/region/${continent}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, [continent]);

  return useMemo(
    () =>
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [countries, searchQuery],
  );
}
