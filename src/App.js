import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./city";

function App() {
  const key = "7977a76f2108c9a33f10d288ed8a9b0f";
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);

  console.log(search);

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="my-5 text-center px-3 py-3 w-[250px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 outline-none focus:outline-none focus:ring"
          type="text"
          placeholder="placeholder"
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
