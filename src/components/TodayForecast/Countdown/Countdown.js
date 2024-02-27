import { useContext, useEffect, useState } from "react";
import classes from "./Countdown.module.css"
import TripsContext from "../../../store/trips-context";
import msConvertor from "../../../data/msConvertor";

const intialTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

const Countdown = () => {
    const tripsCtx = useContext(TripsContext);
    

    const currentTrip = tripsCtx.trips.find(trip => trip.id === tripsCtx.currentTripId);
    const startDate = new Date(currentTrip.startDate);

    const [now, setNow] = useState(startDate);


    const msLeft = startDate - now;
    const time = msConvertor(msLeft);





    useEffect(() => {
        setInterval(() => {
            setNow(new Date)           
        }, 1000);
    }, []);



    return (
        <div className={classes.countdown}>
            <div className={classes.column}>
                <p>{time.days}</p>
                <p>days</p>
            </div>
            <div className={classes.column}>
                <p>{time.hours}</p>
                <p>hours</p>
            </div>
            <div className={classes.column}>
                <p>{time.minutes}</p>
                <p>minutes</p>
            </div>
            <div className={classes.column}>
                <p>{time.seconds}</p>
                <p>seconds</p>
            </div>
        </div>
    )
}

export default Countdown;