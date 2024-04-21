import { useState } from "react";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import Weather from "./components/Weather/Weather";
import Info from "./components/Info/Info";
import Days from "./components/Days/Days";
import "./App.css";

function App() {
  const API_KEY = "605651d946111daf14a4effd918cdce6";
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({});
  const [clickedValue, setClickedValue] = useState("");
  const handleChange = (value) => {
    getData(value);
  };

  const getData = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    if (data.cod != "404") {
      if (data.name) {
        setCities([...cities, `${data.name}, ${data.sys.country}`]);
      }
    } else {
      setCities([]);
    }
    if (data.cod == "400") setCities([]);
    console.log(data);
  };

  const handleClick = async (city) => {
    console.log(city);
    setClickedValue(city);
    setCities([]);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log("click", data);
    setData(data);
  };

  return (
    <>
      <div>
        <AutoComplete onChange={handleChange} clickedValue={clickedValue} />
        {cities && cities.length > 0 && (
          <div className="flex justify-center mb-4">
            <div className="bg-base-500 fw-bold rounded-lg text-base-100 placeholder:text-base-400 w-[311px] items-center divide-y divide-[#1e1e29]">
              {cities.map((city, i) => {
                return (
                  <div key={i} className="p-4">
                    <button onClick={() => handleClick(city)}>{city}</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <Weather data={data} />
        <Info data={data} />
        <Days data={data} />
      </div>
    </>
  );
}

export default App;
