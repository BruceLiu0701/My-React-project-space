import React,{memo} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeData } from '../../../features/cartSlice'
import Swal from 'sweetalert2'
import './index.css'

const Cart=({closeBag})=>{

    const state=useSelector(state=>state.cart);            // 要從store拿到哪一個狀態物件
    const memberName=useSelector(state=>state.membership);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {ticket,departure,passenger,price}=state.information;
    const {certificate}=memberName;

    // 關閉購物袋的回調
    const bagBlock=()=>{
        closeBag();
    }
    
    // 重新選擇旅程 出發地點 購票者資訊的回調
    const selectAgain=(way)=>{
        if(way==='ticket')navigate('/journey/ticket')
        else if (way==='departure')navigate('/journey/departure')
        else navigate('/journey/passenger')
        closeBag();
    }
    const checkout=()=>{
        if(!ticket||!departure||!passenger){
            Swal.fire({
                icon: 'error',
                title: '還不能結帳喔 !',
                text: `請確認旅程、︀出發地點、︀旅客資訊是否已填寫完成 !`,
            })
            return
        }
        closeBag();
        navigate('/checkout')
    }

    const clearBag=()=>{
        Swal.fire({
            title: '確定清空購物袋嗎?',
            text: "按下確認後清空購物袋 !",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:'取消',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確定'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '已清除成功',
                '請至購物袋內查看',
                'success',
              )
              dispatch(removeData());
              navigate('/journey')
            }
        })
    }
    return(
        <section className='space-cart slide-left'>
            <h3>Hi {certificate.length?certificate[0]:'訪客'} 您好~<br/>以下是您的購物袋內容 : </h3>
            {!ticket&&!departure&&!passenger?<p style={{color:'#FFD700',marginBottom:'1.0rem'}}>您的購物車是空的</p>:
            <>
                <div className='space-cart-ticket'>
                    <h4>您選擇的旅程 :</h4>
                    <p>{ticket||'尚未選擇旅程'}</p>
                    <button onClick={()=>selectAgain('ticket')}>重新選擇旅程</button>
                </div>
                <div className='space-cart-departure'>
                    <h4>您選擇的出發地點 :</h4>
                    <p>{departure||'尚未選擇出發地點'}</p>
                    <button onClick={()=>selectAgain('departure')}>重新選擇出發地點</button>
                </div>
                <div className='space-cart-passenger'>
                    <h4>旅客資訊</h4>
                    <div className='space-cart-passenger-information'>
                        {passenger?passenger.map((value,index)=>{
                            if(value.name!==undefined){
                                return(
                                    <p key={value.number}><span>第{index+1}位旅客資料</span> <br/>姓名 : {value.name}<br/>信箱帳號 : {value.email}<br/>國籍 : {value.nationality}<br/>護照號碼 : {value.number}</p>
                                )
                            }return ""
                        }):<p>尚未填寫旅客資料</p>}
                    </div>
                    <button onClick={()=>selectAgain('passenger')}>重新填寫旅客資料</button>
                </div> 
            </>}
            <div className='space-cart-price'>
                <p>總金額 : $ {price*passenger.length}</p>
                <p><button onClick={checkout}>去結帳</button></p>
            </div>
            <div className='space-cart-clear'>
                <p><button onClick={clearBag}>清除購物袋</button></p>
                <p><button onClick={bagBlock}>關閉購物袋</button></p>
            </div>
        </section>
    )
}
export default memo(Cart)