import React, { useState, useRef } from "react";
import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/SearchBarStyles";

const SearchBar = ({ setSearchName }) => {
  const [state, setState] = useState(``);
  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      setSearchName(value);
    }, 500);
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <input
          type='text'
          placeholder='Search Trucks'
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
