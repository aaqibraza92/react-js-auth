import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

const SearchDebounce = () => {
  const [query, setQuery] = useState("");

  // Debounced function to handle API call
  const handleSearch = useCallback(
    debounce((searchTerm) => {
      console.log("API Called with search term:", searchTerm);
  
    }, 30000), // Delay of 500ms after the user stops typing
    []
  );

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
    handleSearch(searchValue); // Call debounced function
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search here..."
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <p>Search Term: {query}</p>
    </div>
  );
};

export default SearchDebounce;
