import { useCallback } from 'react';

export default function Search({ query, onChange }) {
  const handleChange = useCallback((e) => {
    const { value } = e.target;
    onChange(value);
  }, []);

  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="search countries"
        value={query}
      />
    </div>
  );
}
