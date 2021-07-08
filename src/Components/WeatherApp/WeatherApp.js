import React from "react";
import Clock from 'react-live-clock';
const WeatherApp = (props) => {
    return( 
        <>
         <div className=" weather-bg-image d-flex flex-wrap py-3 ">
                <div className="col-12 ">
                    <h2 className="m-0">{props.locationName}</h2>
                    <p>{props.country}</p>
                </div>
                <div className="col-12 mt-auto d-flex">
                    <div className="my-auto " >
                        <h2 className="m-0"><Clock format={'HH:mm:ss'} ticking={true}  /></h2>
                        <p><Clock date={''}
                            format={'dddd, Mo MMMM, YYYY'}/>
                        </p>
                    </div>
                    <div className="ml-auto">
                        <h1>{props.temp}°C</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
export default WeatherApp;