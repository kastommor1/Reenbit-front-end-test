import { useContext, useEffect, useState } from "react";
import IconWeather from "../../IconWeather/IconWeather";
import classes from "./CurrentWeather.module.css"
import TripsContext from "../../../store/trips-context";
import useHttp from "../../../hooks/use-http";
import LoadingIcon from "../../UI/LoadingIcon/LoadingIcon";
import Warning from "../../UI/Warning/Warning";
import days from "../../../data/days";

const CurrenWeather = (props) => {
    
    // const [day, setDay] = useState([]); //!!!!!!!!!!Temporary Harcode
    const [day, setDay] = useState(days[0]); //!!!!!!!!!!Temporary Harcode
    const tripsCtx = useContext(TripsContext);
    const { isLoading, error, sendRequest: fetchDayForecast } = useHttp();
    
    const nowDate = new Date();
    const dayTitle = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(nowDate);
   
    const currentTrip = tripsCtx.trips.find(trip => trip.id === tripsCtx.currentTripId);
    const CITY = currentTrip.city;
    const API_KEY = tripsCtx.apiKay; 


    const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
        + CITY + '/today?unitGroup=metric&include=days%2Ccurrent&key=' + API_KEY + '&contentType=json';
        


    useEffect(() => {
        const transformDay = (forecast) => {
            console.log(forecast);
            const day = forecast.days[0];       
            setDay(day)
            props.setIcon(day.icon)
        }

        // fetchDayForecast({ url: URL }, transformDay); //!!!!!!!!!!Temporary Harcode

    }, [fetchDayForecast, CITY]);

    if (isLoading) { return <LoadingIcon className={classes.loading} /> }
    if (error) { return <Warning>Sorry. Something went wrong</Warning> }


    return (
        <div className={classes["current-weather"]}>
            <div className={classes.day}>{dayTitle}</div>
            <div className={classes.temperature}>
                <IconWeather
                    className={classes["icon-weather"]}
                    theme='dark'
                    icon={day.icon}
                />
                {day.temp}
                <sup>°C</sup>
            </div>
            <div className={classes.city}>{CITY}</div>        
        </div>
    )
}

export default CurrenWeather;