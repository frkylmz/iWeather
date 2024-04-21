/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import logo from "../../assets/weatherIcons/logo.png";

const AutoComplete = (props) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (props.clickedValue) {
      setLocation(props.clickedValue);
    }
  }, [props.clickedValue]);

  const handleChange = (event) => {
    setLocation(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center m-12">
        <img src={logo} alt="" className="w-[186px] h-[32px] opacity-80" />
      </div>
      <div className="flex justify-center items-center text-lg font-bold mt-32">
        <span className="text-base-200">Welcome to</span>
        <span className="text-product">&nbsp;TypeWeather</span>
      </div>
      <div className="flex justify-center items-center text-base-200 text-sm">
        Choose a location to see the weather forecast
      </div>

      <div className="w-full h-full relative">
        <div className="text-center pt-5 pb-2">
          <input
            type="text"
            className="bg-[#1E1e29] rounded-lg text-base-100 placeholder:text-base-400 px-5 py-4 w-[311px] focus:outline-none text-md font-regular"
            placeholder="Search location"
            value={location}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
