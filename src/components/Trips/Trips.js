import classes from "./Trips.module.css"
import PoltavaImg from "../../assets/City-Suit-Small/Poltava.jpg"
import BarcelonaImg from "../../assets/City-Suit-Small/Barcelona.jpg"
import LondonImg from "../../assets/City-Suit-Small/London.jpg"
import { useContext } from "react"
import TripsContext from "../../store/trips-context"
import Trip from "./Trip/Trip"

const Trips = () => {
    const tripsCtx = useContext(TripsContext);
    console.log(tripsCtx.trips);
    tripsCtx.addTrip({id: 5})

    return (
        <div className={classes.trips}>
            <input type="search" placeholder="Search your trip" />
            <ul>
                <li className={classes.add}>
                    <div>
                       <span>+ Add trip</span>                        
                    </div>                    
                </li>

                <Trip/>
                <Trip/>
                <Trip/>

{/* 
                <li className={classes.active}>
                    <div className={classes.photo}>
                        <img src={PoltavaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Poltava</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                 */}
                
            </ul>
        </div>
    )
}

export default Trips;