import React from "react";
import { X, Search } from "react-feather";

import VisuallyHidden from "./VisuallyHidden";

function App() {
  const [showSearchField, setShowSearchField] = React.useState(false);

  let searchId = React.useId();
  /*
  if (showSearchField) {
    searchId = React.useId();
  }
*/
  function handleToggleSearch(event) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  return (
    <>
      <form>
        {showSearchField && (
          <div className="search-field-wrapper">
            <label htmlFor={searchId}>
              <VisuallyHidden>Search</VisuallyHidden>
            </label>
            <input id={searchId} className="search-field" />
          </div>
        )}
        <button className="search-toggle-button" onClick={handleToggleSearch}>
          {showSearchField ? <X /> : <Search />}
          <VisuallyHidden>Toggle search field</VisuallyHidden>
        </button>
      </form>
    </>
  );
}

export default App;
