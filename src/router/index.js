import { createBrowserRouter } from 'react-router-dom'

import Layouts from '../layouts'
import Login from '../page/login'
import Home from '../page/home'
import BtnAuth from '../page/btnAuth'
import Error from '../page/error'

const routers=createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'btnAuth',
                element:<BtnAuth/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element:<Error/>
    }
])

export default routers