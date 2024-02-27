import loadingIMG from "../../assets/Spinner.svg"

const LoadingIcon = (props)=>{
    return(
        <img src={loadingIMG} alt="" className={props.className} />
    )
}

export default LoadingIcon;