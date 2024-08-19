import React from "react"
import ReactDOM from "react-dom/client"
import Body from  "./Component/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./Errors"


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        errorElement: <Error/>
    },
    {
        path: "/calculation",
        element: <Body/>,
    },
])



let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


