/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Day Background
import clearDay from "../../assets/background/clearDay.png";
import clearNight from "../../assets/background/clearNight.png";
import cloudyDay from "../../assets/background/cloudyDay.png";
import cloudyNight from "../../assets/background/cloudyNight.png";
import fewcloudsDay from "../../assets/background/fewcloudsDay.png";
import fewcloudsNight from "../../assets/background/fewcloudsNight.png";
import rainDay from "../../assets/background/rainDay.png";
import rainNight from "../../assets/background/rainNight.png";
import stormDay from "../../assets/background/stormDay.png";
import stormNight from "../../assets/background/stormNight.png";

// Night Background
import clearDayIcon from "../../assets/weatherIcons/clearDay.png";
import clearNightIcon from "../../assets/weatherIcons/clearNight.png";
import cloudyDayIcon from "../../assets/weatherIcons/cloudyDay.png";
import cloudyNightIcon from "../../assets/weatherIcons/cloudyNight.png";
import fewcloudsDayIcon from "../../assets/weatherIcons/fewcloudsDay.png";
import fewcloudsNightIcon from "../../assets/weatherIcons/fewcloudsNight.png";
import rainDayIcon from "../../assets/weatherIcons/rainDay.png";
import rainNightIcon from "../../assets/weatherIcons/rainNight.png";
import stormDayIcon from "../../assets/weatherIcons/stormDay.png";
import stormNightIcon from "../../assets/weatherIcons/stormNight.png";
import moment from "moment";

const Weather = ({ data }) => {
  const weatherData = (data.list && data.list.length > 0 && data.list[0]) || [];
  const currentDate = new Date();
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  useEffect(() => {
    if (weatherData.weather) {
      const weatherType = weatherData.weather[0].main;
      const iconCode = weatherData.weather[0].icon;

      const isDayTime = isDay(currentDate.getHours());

      setBackgroundImage(getBackgroundImage(weatherType, isDayTime));
      setWeatherIcon(getWeatherIcon(iconCode, isDayTime));
    }
  }, [weatherData.weather, currentDate]);

  const isDay = (hour) => {
    return hour > 6 && hour < 18;
  };

  const getBackgroundImage = (weatherType, isDayTime) => {
    switch (weatherType) {
      case "Clear":
        return isDayTime ? clearDay : clearNight;
      case "Clouds":
        return isDayTime ? cloudyDay : cloudyNight;
      case "Few Clouds":
        return isDayTime ? fewcloudsDay : fewcloudsNight;
      case "Rain":
        return isDayTime ? rainDay : rainNight;
      case "Storm":
        return isDayTime ? stormDay : stormNight;
      default:
        return null;
    }
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return clearDayIcon;
      case "01n":
        return clearNightIcon;
      case "02d":
        return cloudyDayIcon;
      case "02n":
        return cloudyNightIcon;
      case "03d":
        return fewcloudsDayIcon;
      case "03n":
        return fewcloudsNightIcon;
      case "04d":
        return fewcloudsDayIcon;
      case "04n":
        return fewcloudsNightIcon;
      case "09d":
        return rainDayIcon;
      case "09n":
        return rainNightIcon;
      case "10d":
        return rainDayIcon;
      case "10n":
        return rainNightIcon;
      case "11d":
        return stormDayIcon;
      case "11n":
        return stormNightIcon;
      default:
        return null;
    }
  };

  return (
    <div>
      <>
        {weatherData.weather ? (
          <div className="relative">
            {backgroundImage && (
              <div className=" w-[359px] h-[328px] bg-base-800 rounded-xl m-auto">
                <img
                  src={backgroundImage}
                  alt="Background"
                  className="background-image m-auto object-cover w-[359px] h-[328px] rounded-lg" //p-3'ü sil
                />
                <div className="absolute top-4 left-[6%] md:left-[42%]">
                  <p className="text-md text-base-100 font-bold">
                    {data.city.name},{data.city.country}
                  </p>
                  <p className="text-xs text-base-100">
                    {moment().format("dddd, MMMM Do YYYY")}
                  </p>
                </div>

                <div className="absolute top-[60%] left-[6%] md:left-[42%]">
                  <div>
                    <div className="text-heading-xl font-extrabold text-white">
                      {weatherData.main.temp.toFixed()} °C
                    </div>
                  </div>
                  <div>
                    <div className="text-heading-sm font-bold text-white">
                      {weatherData.main.temp_min.toFixed()} °C /&nbsp;
                      {weatherData.main.temp_max.toFixed()} °C
                    </div>
                    <p className="text-sm text-white">
                      {weatherData.weather[0].description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-[51%] right-[-1%] md:right-[41%] w-[160px] h-[160px]">
                  {weatherIcon && (
                    <img
                      src={weatherIcon}
                      alt="Weather Icon"
                      className="weather-icon m-auto object-cover rounded-xl"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Weather;
