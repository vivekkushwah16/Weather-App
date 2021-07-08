import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherApp from "./WeatherApp";
import WeatherappInfo from "./WeatherappInfo";


const App = () => {
    const [latitude,setLatitude]=useState(null);
    const [longitude , setLongitude]=useState(null);
    const [temp,setTemp]=useState(null);
    const [locationName,setLocationName]=useState(null);
    const [Humidity,setHumidity]=useState(null);
    const [WindSpeed,setWindSpeed]=useState(null);
    const [FeelLike,setFeelLike]=useState(null);
    const [country,setCountry]=useState(null);
    const [Visibilty,setVisibilty]=useState(null);
    const [MaxTemp,setMaxTemp]=useState(null);
    const [weatherName,setWeatherName]=useState(null);
    useEffect( () => {
        fetchData();
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)
        });  
    });
    const fetchData = () => {
        return axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=95a97b0416b72dd69ce1ad5d2cd30619`)
              .then((res) => { console.log(res.data)
                setTemp(Math.round(res.data.main.temp));
                setLocationName(res.data.name);
                setCountry(res.data.sys.country); 
                setHumidity(res.data.main.humidity);
                setVisibilty(res.data.visibility);
                setFeelLike(res.data.main.feels_like);
                setWindSpeed(res.data.wind.speed);
                setMaxTemp(res.data.main.temp_max);
                setWeatherName(res.data.weather[0].main);
               });
    }           
    return (
        <>
        <div className="d-flex justify-content-center row align-items-center ">
            <div className="col-8 d-flex justify-content-center weather py-5">
                <WeatherApp locationName={locationName}
                    temp={temp} 
                    country={country}
                />
                <WeatherappInfo humidity={Humidity}
                    visibilty={Visibilty}
                    WindSpeed={WindSpeed}
                    FeelLike={FeelLike}
                    MaxTemp={MaxTemp}
                    weatherName={weatherName}
                />
            </div>
        </div>
        </>
    );
   
        

    
};
export default App;