import React from "react"
import ReactDOM from "react-dom/client"
import Body from  "./Component/Body"

const AppLayout = ()=>{
    return(
        <>
            <h1 style={{textAlign:"center"}}>Choose Items</h1>
            <Body/>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)