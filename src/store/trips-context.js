import React from "react";

const TripsContext = React.createContext({
    trips: [],
    currentTripId: 1,    
    addTrip: (trip)=>{},
    setCurrentTripId: (id)=>{},
    apiKay: '',
});

export default TripsContext;



