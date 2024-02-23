import classes from "./Trips.module.css"

const Trips = () => {
    return (
        <div className={classes.trips}>
            <input type="search" placeholder="Search your trip" />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Trips;