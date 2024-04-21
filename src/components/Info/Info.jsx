/* eslint-disable react/prop-types */

// Phosphor Icons
import cloudRain from "../../assets/phosphorIcons/cloudRain.png";
import drop from "../../assets/phosphorIcons/drop.png";
import sundim from "../../assets/phosphorIcons/sundim.png";
import thermometer from "../../assets/phosphorIcons/thermometer.png";
import wind from "../../assets/phosphorIcons/wind.png";
// import spinner from "../../assets/phosphorIcons/spinner.png";

const Info = ({ data }) => {
  const weatherData = (data.list && data.list.length > 0 && data.list[0]) || [];

  return (
    <>
      {data && data.cod == "200" && (
        <div className=" bg-base-800 rounded-xl m-auto w-[359px] mt-4 relative px-6 top-[10%]">
          <ul className="max-w-[327px] divide-y divide-base-700">
            <li className="py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-[24px] h-[24px]">
                  <img src={thermometer} alt="" className="opacity-40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-heading-xs font-bold text-base-200">
                    Thermal sensation
                  </p>
                </div>
                <div className="inline-flex items-center text-base-100 text-heading-sm font-bold">
                  {weatherData.main?.feels_like?.toFixed()} °C
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-[24px] h-[24px]">
                  <img src={cloudRain} alt="" className="opacity-40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-heading-xs font-bold text-base-200">
                    Probability of rain
                  </p>
                </div>
                <div className="inline-flex items-center text-base-100 text-heading-sm font-bold">
                  -
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-[24px] h-[24px]">
                  <img src={wind} alt="" className="opacity-40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-heading-xs font-bold text-base-200">
                    Wind Speed
                  </p>
                </div>
                <div className="inline-flex items-center text-base-100 text-heading-sm font-bold">
                  {weatherData.wind?.speed?.toFixed()} km/h
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-[24px] h-[24px]">
                  <img src={drop} alt="" className="opacity-40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-heading-xs font-bold text-base-200">
                    Air humidity
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400"></p>
                </div>
                <div className="inline-flex items-center text-base-100 text-heading-sm font-bold">
                  {weatherData.main?.humidity} %
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-[24px] h-[24px]">
                  <img src={sundim} alt="" className="opacity-40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-base-200">UV Index</p>
                </div>
                <div className="inline-flex items-center text-base-100 text-heading-sm font-bold">
                  -
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Info;
