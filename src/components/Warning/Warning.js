import classes from "./Warning.module.css"

const Warning = props => {
    return (
        <div className={props.className}>
            <h4 className={classes.warning}>{props.children}</h4>
        </div>
    )
}

export default Warning;