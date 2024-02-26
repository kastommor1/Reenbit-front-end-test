import classes from "./Trips.module.css"
import PoltavaImg from "../../assets/City-Suit-Small/Poltava.jpg"
import BarcelonaImg from "../../assets/City-Suit-Small/Barcelona.jpg"
import LondonImg from "../../assets/City-Suit-Small/London.jpg"
import { useContext } from "react"
import TripsContext from "../../store/trips-context"
import Trip from "./Trip/Trip"

const Trips = () => {
    const tripsCtx = useContext(TripsContext);
    const trips = tripsCtx.trips; 
      

    // const sample = {
    //     id: 1,
    //     city: 'Poltava',
    //     startDate: '15-06-2024',
    //     endDate: '20-06-2024'
    // }



    return (
        <div className={classes.trips}>
            <input type="search" placeholder="Search your trip" />
            <ul>
                <li className={classes.add}>
                    <div>
                        <span>+ Add trip</span>
                    </div>
                </li>


                {trips.map(trip => (
                    <Trip
                        key={trip.id}
                        id={trip.id}
                        city={trip.city}
                        startDate={trip.startDate}
                        endDate={trip.endDate}
                    />
                ))}      
            </ul>
        </div>
    )
}

export default Trips;