import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
  };

const WeatherappInfo = (props) => {
    var weatherIcon=null;
        switch (props.weatherName) {
            case "Clouds":
            weatherIcon='CLOUDY'
            break;
           
            case "Clear":
            weatherIcon='CLEAR_DAY'
            break;    
            case "Smoke":
            weatherIcon='FOG'
            break;
            case "Rain":
            weatherIcon='RAIN'
            break;  
            case "Haze":
            weatherIcon='PARTLY_CLOUDY_DAY'
            break;   
            default:
            weatherIcon="CLEAR_DAY"
            break;
        }
    return ( 
        <>
         <div className=" side-bg text-center py-4">
            <ReactAnimatedWeather
                icon={weatherIcon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
            />
            <h2 className="py-2">{props.weatherName}</h2>
            <div className="d-flex flex-wrap">
                <div className="d-flex col-12 py-2 ">
                    <div><strong>Humidity</strong></div>
                    <div className="ml-auto">{props.humidity}</div>
                </div>
                <div className="d-flex col-12 py-2 ">
                    <div><strong>Visibilty</strong></div>
                    <div className="ml-auto">{props.visibilty} mi</div>
                </div>
                <div className="d-flex col-12 py-2 ">
                    <div><strong>Wind speed</strong></div>
                    <div className="ml-auto">{props.WindSpeed} Km/h</div>
                </div>
                <div className="d-flex col-12 py-2 ">
                    <div><strong>Feels Like</strong></div>
                    <div className="ml-auto">{props.FeelLike} °C</div>
                </div>
                <div className="d-flex col-12 py-2 ">
                    <div><strong>Max Temp</strong></div>
                    <div className="ml-auto">{props.MaxTemp} °C</div>
                </div> 
            </div>
         </div>

        </>
    );
};
export default WeatherappInfo;