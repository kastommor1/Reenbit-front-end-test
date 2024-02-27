import { useEffect, useState } from "react";
import IconWeather from "../IconWeather/IconWeather";
import classes from "./RangeForecast.module.css"
import useHttp from "../../hooks/use-http";
import Day from "./Day/Day";

const RangeForecast = () => {
    const [week, setWeek] = useState([]);

    const { isLoading, error, sendRequest: fetchRageForecast } = useHttp();

    useEffect(() => {
        const transformTasks = (forecast) => {
            console.log(forecast);

            const days = forecast.days;

            const loadedWeek = [];
            for (const dayKey in days) {
                if (dayKey > 6) { break }
                loadedWeek.push(days[dayKey]);
            }

            console.log(loadedWeek);            
            setWeek(loadedWeek)

        }

        const CITY = 'Poltava';
        const START_DATE = '2024-03-24';
        const END_DATE = '2024-03-31';
        const API_KEY = 'HFQLEB932DZ5X7DUW2SAF6KQS'


        const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
            + CITY + '/' + START_DATE + '/' + END_DATE +
            '?unitGroup=metric&include=days%2Ccurrent&key=' + API_KEY + '&contentType=json';

        // fetchRageForecast({ url: URL }, transformTasks);

    }, [fetchRageForecast]);


    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className={classes['range-forecast']}>
            <h2>Week</h2>
            <ul>
                {arr.map(item => (
                    <Day                        
                        key={item}
                        date={'2020-12-13'}                        
                        icon={'cloudy'}
                        tempMin={'15'}                                                
                        tempMax={'25'}                                                
                    />
                ))}

            </ul>
        </div>
    )
}

export default RangeForecast;