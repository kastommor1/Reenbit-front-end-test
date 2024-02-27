import { useState } from "react";
import classes from "./App.module.css"

import RangeForecast from "./components/RangeForecast/RangeForecast";
import TodayForecast from "./components/TodayForecast/TodayForecast";
import Trips from "./components/Trips/Trips";
import TripProvider from "./store/TripsProvider";
import CreateTrip from "./components/CreateTrip/CreateTrip";


function App() {

  const [createTripIsShown, setCreateTripIsShown] = useState(false);

  const showCreateTripHandler = () => {
    setCreateTripIsShown(true);
  };

  const hideCreateTripHandler = () => {
    setCreateTripIsShown(false);
  };

  


  return (
    <TripProvider>
       {createTripIsShown && <CreateTrip onClose={hideCreateTripHandler} />} 

      <div className={classes.app}>

        <div className={classes.left}>
          <h1><span>Weather</span> Forecast</h1>
          <Trips onShowModal={setCreateTripIsShown}/>
          <RangeForecast />
        </div>

        <TodayForecast />
        
      </div>
    </TripProvider>
  );
}

export default App;
