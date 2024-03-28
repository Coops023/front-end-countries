import { useCallback } from 'react';

export default function Filter({ continent, onChangeContinent }) {
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      onChangeContinent(value);
    },
    [onChangeContinent],
  );

  return (
    <div>
      <label htmlFor="Countries">Choose a country:</label>

      <select
        name="Countries"
        id="Countries"
        value={continent}
        onChange={handleChange}
      >
        <option value="all">World</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
      </select>
    </div>
  );
}
