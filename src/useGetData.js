import { useEffect, useState } from "react";
import axios from "axios";
/* Custom Hook
  - This hook ables take the data from any API.
  - Import to your component: import { useGetData } from '../path'
  - Save it in a variable: const data = useGetData('http://API-example.com')
  - Then, you can make any query allowed by the API
  
  E.G: 
    function callingApi() {
      console.log(myData[2]
    }
    // returns the third item of the array.


*/

function useGetData(api) {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await axios.get(api);
    setFilms(response.data);
  }, []);

  return films;
}

export { useGetData };
