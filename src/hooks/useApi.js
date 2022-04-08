import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (recurso) => {
  const [data, setData] = useState([]);

  const method = 'GET'
  const url = `https://api.themoviedb.org/3${recurso}`;


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const options = {
          method,
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4',
            'Content-Type': 'application/json;charset=utf-8'
          },
          url
        };
        const response = await axios(options);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [method, url]);

  return (data);
}

export default useApi;