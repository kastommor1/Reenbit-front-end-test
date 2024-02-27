import TripsContext from "./trips-context";
import { useState } from "react";


const initialTrips = [
    {
        id: 1,
        city: 'Poltava',
        startDate: '2024-02-15',
        endDate: '2024-03-26'
    },
    {
        id: 2,
        city: 'London',
        startDate: '2024-02-15',
        endDate: '2024-03-26'
    },
    {
        id: 3,
        city: 'Barcelona',
        startDate: '2024-02-15',
        endDate: '2024-03-26'
    }
]

const TripsProvider = props => {

    const [trips, setTrips] = useState(initialTrips);
    const [currentTripId, setcurrentTripId] = useState(1);

    const addTripHandler = trip => {
        console.log('Trip added');
        console.log(trip);
    }

    const setCurrentTripIdHandler = id => {
        setcurrentTripId(id)
    }

    const tripContext = {
        trips: trips,
        currentTripId: currentTripId,
        addTrip: addTripHandler,
        setCurrentTripId: setCurrentTripIdHandler,
        apiKay: 'HFQLEB932DZ5X7DUW2SAF6KQS',
    }

    return (
        <TripsContext.Provider value={tripContext}>
            {props.children}
        </TripsContext.Provider>
    )

}

export default TripsProvider;