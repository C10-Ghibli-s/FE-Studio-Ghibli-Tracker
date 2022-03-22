import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { debouncing } from "../../debouncing";

/* Maybe I will need to use react context and create a useInitialState
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

function SearchEngine() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [films, SetFilms] = useState([]);

  // Handles the input to makes querys
  const handleInput = (e) => {
    const searchingQuery = e.target.value;
    setSearchQuery(searchingQuery);

    // If searchQuery (state) has more length than 0,
    // onto matches filter with regex and return the result.
    let matches = [];
    if (searchQuery.length > 0) {
      matches = films.filter((film) => {
        const regex = new RegExp(`${searchQuery}`, "gi");
        return film.title.match(regex);
      });
      setResults(matches);
    }
    console.log("matches movies", results);
  };

  // useEffect executes when searchQuery is save it.
  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    SetFilms(response.data);
  }, []);

  // console.log("searchQuery", searchQuery);
  // console.log("results", results);

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
  // But it needs a "?search=" param
  useEffect(() => {
    if (searchQuery !== "") {
      debouncedFetchData(searchQuery);
    }
  }, [searchQuery, debouncedFetchData]);
 */

  return (
    <React.StrictMode>
      <>
        <input type="text" onChange={handleInput} />
        <div>
          Results:
          <ul>
            {!!searchQuery &&
              results.map((film, index) => <li key={index}>{film.title}</li>)}
          </ul>
        </div>
      </>
    </React.StrictMode>
  );
}

export { SearchEngine };
