import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/', 
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/details')
        },
        {
            path: '/courses/:id',
            element: <Courses></Courses>,
            loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]}
])