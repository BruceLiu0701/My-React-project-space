import {lazy} from 'react'
import Banner from '../components/Banner'
import Ticket from '../components/Journey/Ticket'
import Passenger from '../components/Journey/Passenger'
import Departure from '../components/Journey/Departure'
import Checkout from '../components/Checkout'
import Bank from '../components/Checkout/Bank'
import Applepay from '../components/Checkout/Applepay'
import Credit from '../components/Checkout/Credit'
import {Navigate} from 'react-router-dom'
const Introduction=lazy(()=>import('../components/Introduction'))
const Journey=lazy(()=>import('../components/Journey'))
const Member=lazy(()=>import('../components/Member'))

const routes=[
    {
        path:'/banner',
        element:<Banner/>
    },
    {
        path:'/Introduction',
        element:<Introduction/>
    },
    {
        path:'/member',
        element:<Member/>
    },
    {
        path:'/journey',
        element:<Journey/>,
        children:[
            {
                path:'ticket',       // 註冊子級路由不須寫"/"
                element:<Ticket/>
            },
            {
                path:'departure',
                element:<Departure/>
            },
            {
                path:'passenger',
                element:<Passenger/>
            },
            {   // 子組件的地方也做重定向
                path:'/journey',
                element:<Navigate to='ticket'/>
            }
        ]
    },
    {
        path:'/checkout',
        element:<Checkout/>,
        children:[
            {
                path:'bank',
                element:<Bank/>
            },
            {
                path:'applepay',
                element:<Applepay/>
            },
            {
                path:'credit',
                element:<Credit/>
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to='/banner'/>
    }
]

export default routes;