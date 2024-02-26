import classes from "./Trip.module.css"
import PoltavaImg from "../../../assets/City-Suit-Small/Poltava.jpg"
import BarcelonaImg from "../../../assets/City-Suit-Small/Barcelona.jpg"
import LondonImg from "../../../assets/City-Suit-Small/London.jpg"
import { useContext, useEffect } from "react"
import TripsContext from "../../../store/trips-context"




const Trip = props => {

    const tripsCtx = useContext(TripsContext);
    const currentTripId = tripsCtx.currentTripId;

    const citiesLink = {
        'Poltava': PoltavaImg,
        'London': LondonImg,
        'Barcelona': BarcelonaImg,
    }

    const isActiveClass = currentTripId == props.id ? classes.active : '';

    return (
        <li className={isActiveClass}>
            <div className={classes.photo}>
                <img src={citiesLink[props.city]} alt="" />
            </div>
            <div className={classes.description}>
                <div className={classes.city}>{props.city} - {currentTripId}</div>
                <div className={classes.date}>{props.startDate}-{props.endDate}</div>
            </div>
        </li>
    )
}

export default Trip;