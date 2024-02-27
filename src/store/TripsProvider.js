import TripsContext from "./trips-context";
import { useState } from "react";


const initialTrips = [
    {
        id: 1,
        city: 'Poltava',
        startDate: '2024-03-11',
        endDate: '2024-03-18'
    },
    {
        id: 2,
        city: 'London',
        startDate: '2024-03-12',
        endDate: '2024-03-19'
    },
    {
        id: 3,
        city: 'Barcelona',
        startDate: '2024-03-13',
        endDate: '2024-03-20'
    }
]

const TripsProvider = props => {

    const [trips, setTrips] = useState(initialTrips);
    const [currentTripId, setcurrentTripId] = useState(initialTrips[initialTrips.length-1].id);   

    const addTripHandler = trip => {       
        setTrips(oldTrips=>[...oldTrips, trip])
    }

    const setCurrentTripIdHandler = id => {
        setcurrentTripId(id)
    }

    const tripContext = {
        trips: trips,
        currentTripId: currentTripId,
        addTrip: addTripHandler,
        setCurrentTripId: setCurrentTripIdHandler,
        // apiKay: 'HFQLEB932DZ5X7DUW2SAF6KQS', //1
        apiKay: 'R4R2TJMZKSTQCNMF6F6T29JEX',
    }

    return (
        <TripsContext.Provider value={tripContext}>
            {props.children}
        </TripsContext.Provider>
    )

}

export default TripsProvider;