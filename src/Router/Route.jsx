import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from './../Pages/LogIn/Login';
import Register from './../Pages/Register/Register';
import Create from "../Pages/Create/Create";
import Assignments from './../Pages/Assignments/Assignments';
import Details from "../Pages/Details/Details";
import Pending from './../Pages/Pending/Pending';
import Preview from "../Pages/Preview/Preview";
import MyAttemp from "../Pages/MyAttemp/MyAttemp";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";
const route = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/create',
                element:<PrivateRoute> <Create></Create></PrivateRoute>
            },
            {
                path: '/assignments',
                loader: ()=>fetch('https://learnx-omega.vercel.app/assignment'),
                element: <Assignments></Assignments>
            },
            {
                path: '/details/:id',
                loader: ({params})=>fetch(`https://learnx-omega.vercel.app/assignment/${params.id}`),
                element:<PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/pending/',
                loader: ()=>fetch("https://learnx-omega.vercel.app/pending/",{ credentials : "include" }),
                element:<PrivateRoute><Pending></Pending></PrivateRoute>
            },
            {
                path: '/previewassignment/:id',
                loader: ({params})=>fetch(`https://learnx-omega.vercel.app/pending/${params.id}`,{ credentials : "include" }),
                element:<PrivateRoute><Preview/></PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({params})=>fetch(`https://learnx-omega.vercel.app/assignment/${params.id}`),
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/attempte',
                element:<PrivateRoute><MyAttemp></MyAttemp></PrivateRoute>
            }
        ]
    }

])
export default route;