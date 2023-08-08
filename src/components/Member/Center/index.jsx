import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import './index.css'

const Center=({handleLogout})=>{

    const state=useSelector(state=>state.membership);
    const {certificate}=state;
    const logOut=()=>{
        Swal.fire({
            title: '確定要登出嗎?',
            text: "按下確認後會員登出 !",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:'取消',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確定'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '已成功登出',
                '',
                'success',
              )
              handleLogout();
            }
        })
        
    }
    return(
        <div className='space-center'>
            <div>
                <h2>Hi~{certificate[0]}您好，歡迎來到會員中心</h2>
                <span>紅利點數 : 0</span>
            </div>
            <p>重要消息 : 累積消費花費滿10000銀河幣，立即成為VIP會員，立即享有購票95折優惠<br/>(每消費1000銀河幣可獲得10紅利點數)</p>
            <p>購票歷史紀錄 : </p>
            <p>查無之前購票紀錄</p>
            <div className='space-center-btn'>
                <button onClick={logOut}>登出</button>
            </div>
        </div>
    )
}
export default Center