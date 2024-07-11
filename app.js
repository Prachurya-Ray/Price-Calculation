import React from "react"
import ReactDOM from "react-dom/client"
import Body from  "./Component/Body"
import Header from "./Header_Component/Header"
import BillingHeader from "./Billing/BillingHeader"
import DineInMain from "./Dine-In/Main"
import Orders from "./Operations/Orders/Orders"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./Errors"

// const AppLayout = ()=>{
//     return(
//         <> 
//             <Orders/>
//             <DineInMain/>
//             <BillingHeader />
//             <Header/>
//             <h1 style={{textAlign:"center"}}>Choose Items</h1>
//             <Body/>
//         </>
//     )
// }

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        errorElement: <Error/>
    },
    {
        path: "/dineIn",
        element: <DineInMain/>,
    },
    {
        path: "/bill",
        element: <BillingHeader/>,
    },
    {
        path: "/calculation",
        element: <Body/>,
    },
    {
        path: "/orders",
        element: <Orders/>,
    },
])



let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)