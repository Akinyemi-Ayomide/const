import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Layout from "../RootLayout/Layout"
import Details from "../pages/Details"

const router = createBrowserRouter([
    {path:'/', element:<Layout />, children:[
        {index:true, element:<HomePage /> },
        {path:'details/:id', element:<Details />}, 
      
    ]}
])



export default router