import Modal from "../UI/Modal/Modal"
import { useContext, useState } from 'react';
import classes from "./CreateTrip.module.css"
import TripsContext from "../../store/trips-context";
import { dateConvertor, getTomorrowDate } from "../../data/msConvertor";


const CreateTrip = props => {
    const tripsCtx = useContext(TripsContext);

    const availabeleCitys = [
        'Poltava',
        'London',
        'Barcelona'
    ];

    const tommorow = getTomorrowDate();   

    const tomorrowFormated = dateConvertor(tommorow);    
    
    const [city, setCity] = useState(availabeleCitys[0]);
    const [startDate, setStartDate] = useState(tomorrowFormated);
    const [endDate, setEndDate] = useState(tomorrowFormated);
    

    const setCityHandler = event => {
        setCity(event.target.value)
    }
    const startDateHandler = event => {
        setStartDate(event.target.value)
    }
    const endDateHandler = event => {
        setEndDate(event.target.value)
    }


    const confirmHandler = (event) => {
        event.preventDefault();
        const today = new Date;    

        tripsCtx.addTrip({         
            id: today.getTime(),
            city,
            startDate,
            endDate
        })

        props.onClose();
    };


    return (
        <Modal onClose={props.onClose}>
            <div className={classes.heading}>
                <p>Create trip</p>
            </div>
            <form className={classes.form} onSubmit={confirmHandler}>

                <div className={classes.control}>
                    <label htmlFor='cities'><span>*</span>City</label>
                    <select
                        key={city}
                        value={city}
                        onChange={setCityHandler}
                        id='cities'
                    >
                        {availabeleCitys.map(city => (<option value={city}>{city}</option>))}

                    </select>
                </div>

                <div className={classes.control}>
                    <label htmlFor='start-date'><span>*</span>Start date</label>
                    <input
                        value={startDate}
                        onChange={startDateHandler}
                        type='date'
                        id='start-date'
                        min={tomorrowFormated}
                        defaultValue={tomorrowFormated}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor='end-date'><span>*</span>End date</label>
                    <input
                        value={endDate}
                        onChange={endDateHandler}
                        type='date'
                        id='end-date'
                        min={startDate}                        
                    />
                </div>

                <div className={classes.actions}>
                    <button type='button' onClick={props.onClose}>
                        Cancel
                    </button>
                    <button className={classes.submit}>Save</button>
                </div>
            </form>
        </Modal>
    )
}

export default CreateTrip;