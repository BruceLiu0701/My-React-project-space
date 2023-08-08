import { createSlice } from "@reduxjs/toolkit";

const initialState={
    certificate:[],   // 暫存會員名稱的狀態, 用以表示現在誰登入
    membership:{login:true,center:false},    // login切換會員登入和註冊會員, center則是否進入會員中心
    userData:[]       // 會員註冊儲存資料的狀態
}

const membershipSlice=createSlice({
    name:'membership',
    initialState,
    reducers:{
        whoLogIn:(state,action)=>{
            state.certificate=[action.payload];
        },
        register:(state)=>{               // 切換會員登入和註冊會員
            state.membership.login=!state.membership.login
        },
        goToCenter:(state)=>{              // 登入
            state.membership.center=true
        },
        LogOut:(state)=>{                  // 登出
            state.certificate=[];
            state.membership.center=false
        },
        addNewMember:(state,action)=>{     // 註冊會員
            console.log(action.payload)
            state.userData=[...state.userData,action.payload]
        }
    }
})
export const {whoLogIn,register,goToCenter,LogOut,addNewMember} =membershipSlice.actions
export default membershipSlice.reducer