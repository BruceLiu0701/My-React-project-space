import {configureStore} from '@reduxjs/toolkit'
import cart from '../features/cartSlice'
import membership from '../features/membershipSlice'

const store=configureStore({
    reducer:{
        cart,      // 簡寫方式
        membership
    }
})
export default store