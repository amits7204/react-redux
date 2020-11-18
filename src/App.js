import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import location from "../src/location";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let val = location
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(val);
    }
    setLoading(false);
  }, [query]);

  return (
    <div className="App">
      <p>{query}</p>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        value={query}
        onChange={(val) => setQuery(val)}
        suggestions={suggestions}
      />
    </div>
  );
}

export default App;
