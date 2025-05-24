import React, { useEffect, useState } from "react";
import useDebounce from "../custom hooks/useDebounce";

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  const debouncingQuery = useDebounce(query, 3000);

  useEffect(() => {
    if (debouncingQuery) {
      console.log(`search for ${debouncingQuery}`);
    }
  }, [debouncingQuery]);

console.log(debouncingQuery);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{backgroundColor : "green", color:"black"}}
      />
    </div>
  );
};

export default SearchComponent;
