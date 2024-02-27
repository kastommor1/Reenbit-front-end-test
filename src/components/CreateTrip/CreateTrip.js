import Modal from "../UI/Modal/Modal"
import classes from "./CreateTrip.module.css"

const CreateTrip = props => {
    return(
        <Modal onClose={props.onClose}>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}

export default CreateTrip;