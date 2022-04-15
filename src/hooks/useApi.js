import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (recurso) => {
  const [data, setData] = useState([]);

  const method = 'GET'
  const url = `${process.env.REACT_APP_API}${recurso}`;


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const options = {
          method,
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
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

  return ([data]);
}

export default useApi;