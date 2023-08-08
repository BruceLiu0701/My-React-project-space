import { createSlice } from "@reduxjs/toolkit";

// 初始化狀態, 創建一個狀態物件
const initialState={
    information:{ticket:'',departure:'',passenger:'',price:0}
}
export const cartSlice=createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{
        addTicket:(state,action)=>{
            // state為整個狀態物件
            const {destination,price}=action.payload
            state.information={...state.information,ticket:destination,price}
        },
        addDeparture:(state,action)=>{
            state.information.departure=action.payload;
        },
        addPassenger:(state,action)=>{
            state.information.passenger=action.payload
        },
        // 清除購物袋的action
        removeData:(state)=>{
            state.information={ticket:'',departure:'',passenger:'',price:0}
        }
    }
})
export const {addTicket,addDeparture,addPassenger,removeData}=cartSlice.actions;
export default cartSlice.reducer;