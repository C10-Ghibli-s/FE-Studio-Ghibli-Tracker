/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { debouncing } from "../../debouncing";
import "./SearchEngine.scss";
import { Autocomplete } from "../Autocomplete";

/* [NOTE] Maybe I will need to use react context and create a useInitialState
  Process to make the Search Engine
  - Create a input bar
  - When the use will be writing make a consult using debouncing
  - Display a component showing all the possible options to choose
  - Then, the user will click it to the movie
  - Then, show a target with result
    - The suggestions must get close
    - The input bar should be reset after show a result
*/
/* # Documentation
  - This component when receives text
  executes a function that saves the state
  - Debouncing has been implemented
  - To use Deboucing it needs a search params from backend
  - While the data is loaded in state  

*/

function SearchEngine({ films, menuOpen, setMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [film, setFilm] = useState({});
  // Handles the input to makes querys
  const handleInput = (e) => {
    const searchingQuery = e.target.value;
    setSearchQuery(searchingQuery);

    // If searchQuery (state) has more length than 0,
    // then, matches will filter using regex, and will returns the result.
    let matches = [];
    if (searchQuery.length > 0) {
      matches = [...films].filter((film) => {
        const regex = new RegExp(`${searchQuery}`, "i");
        return film.title.match(regex);
      });
      setResults(matches);
    }
  };

  // // useEffect executes when searchQuery is save it.
  // useEffect(async () => {
  //   const response = await axios.get("https://ghibliapi.herokuapp.com/films");
  //   SetFilms(response.data);
  // }, []);

  /* // Debouncing algorithm
  const debouncedFetchData = useMemo(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://swapi.dev/api/people?search=${searchQuery}`
      );
      setResults(response.data);
      console.log("results", results);
    };
    return debouncing(fetchData, 300);
  }, []);
  // This useEffect is the first propose to make a search
  // Making multiple querys until make a match
  // But it needs a "?search=" param at the backend
  useEffect(() => {
    if (searchQuery !== "") {
      debouncedFetchData(searchQuery);
    }
  }, [searchQuery, debouncedFetchData]);
 */
  return (
    <>
      <span className="search-icon"></span>
      <input
        placeholder="What movie are you looking for?"
        autoComplete="off"
        className="searchBar"
        type="text"
        id="search"
        onChange={handleInput}
        onClick={() => {
          if (menuOpen) {
            setMenuOpen(!menuOpen);
          }
        }}
        onBlur={() => {
          setTimeout(() => {
            setResults([]);
          }, 300);
        }}
      />
      <Autocomplete
        results={results}
        searchQuery={searchQuery}
        setResults={setResults}
        film={film}
        setFilm={setFilm}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}

export { SearchEngine };
