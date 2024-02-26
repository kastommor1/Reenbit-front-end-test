import TripsContext from "./trips-context";
import { useState } from "react";


const initialTrips = [
    {
        id: 1,
        city: 'Poltava',
        startDate: '15-06-2024',
        endDate: '20-06-2024'
    },
    {
        id: 2,
        city: 'London',
        startDate: '16-06-2024',
        endDate: '20-06-2024'
    },
    {
        id: 3,
        city: 'Barcelona',
        startDate: '17-06-2024',
        endDate: '20-06-2024'
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
    }

    return (
        <TripsContext.Provider value={tripContext}>
            {props.children}
        </TripsContext.Provider>
    )

}

export default TripsProvider;