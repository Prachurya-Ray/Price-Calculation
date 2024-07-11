import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError()
    const {status, statusText} = err
    return(
        <div className="text-center">
            <h1>{status}</h1>
            <h2>{statusText}</h2>
        </div>

    )
}

export default Error;