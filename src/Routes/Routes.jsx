import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/details/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path:"/checkout/:id",
        element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/bookService/${params.id}`)
      },
      {
        path:"/bookings",
        element:<PrivateRoutes><Cart></Cart></PrivateRoutes>
      }
    ]
  }
])

export default Routes;