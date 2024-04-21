/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Icons
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

const Days = ({ data }) => {
  const [days, setDays] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    if (data.list) {
      const filteredDays = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setDays(filteredDays);
    }
  }, [data]);

  const isDay = (hour) => {
    return hour > 6 && hour < 18;
  };

  const renderIcon = (iconCode) => {
    const isDayTime = isDay(currentDate.getHours());

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
    <>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-base-800 rounded-xl m-auto w-[359px] h-auto mt-4 relative">
          <div className="grid grid-cols-5 gap-1">
            {days &&
              days.map((day, i) => {
                return (
                  <div key={i} className="h-auto w-auto m-3">
                    <div className="text-sm text-base-200 font-bold flex items-center justify-center">
                      {moment(day.dt_txt).format("ddd")}
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={renderIcon(day.weather[0].icon)} alt="" />
                    </div>
                    <div className="text-sm text-base-100 font-bold flex items-center justify-center">
                      {day.main.temp_max.toFixed()} °C
                    </div>
                    <div className="text-sm text-base-400 font-bold flex items-center justify-center">
                      {day.main.temp_min.toFixed()} °C
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Days;
