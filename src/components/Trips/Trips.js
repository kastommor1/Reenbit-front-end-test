import classes from "./Trips.module.css"
import { useContext, useState } from "react"
import TripsContext from "../../store/trips-context"
import Trip from "./Trip/Trip"

const Trips = (props) => {
    const tripsCtx = useContext(TripsContext);
    const [searchInput, setSearchInput] = useState('')

    const searchInputHandler = (event) => {
        setSearchInput(event.target.value);
    }

    const filteredTrips = tripsCtx.trips.filter(trip => trip.city.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div className={classes.trips}>
            <input
                type="search"
                placeholder="Search your trip"
                value={searchInput}
                onChange={searchInputHandler}
            />
            <ul>
                <li className={classes.add} onClick={props.onShowModal}>
                    <div>
                        <span>+ Add trip</span>
                    </div>
                </li>


                {filteredTrips.map(trip => (
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