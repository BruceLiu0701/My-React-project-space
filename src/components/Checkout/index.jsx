import React,{useState,useEffect} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PubSub from 'pubsub-js'
import Swal from 'sweetalert2'
import './index.css'

const Checkout=()=>{

    const state=useSelector(state=>state.cart);
    const member=useSelector(state=>state.membership);
    const [payment,setPayment]=useState('');
    const {ticket,departure,passenger,price}=state.information
    const navigate=useNavigate();

    const total=member.certificate[0]&&passenger&&price*passenger.length>=10000?(price*passenger.length)*95/100:price*passenger.length
    

    useEffect(()=>{
        PubSub.subscribe('whichWay',(__,data)=>{
            setPayment(data);
        })
        return ()=>{
            PubSub.unsubscribe('whichWay');
        }
    })
    // 選擇付款方式的回調
    const selectWay=(way)=>{
        if(way==='bank')navigate('bank');
        else if(way==='applepay')navigate('applepay');
        else navigate('credit')  ;
    }
    // 暫存付款方式的回調
    const savePayment=(way)=>{
        setPayment(way);
    }
    // 確認訂票按鈕的回調
    const checkPayment=()=>{
        if(payment&&ticket&&departure&&passenger){
            Swal.fire({
                title: '確認訂票嗎 ?',
                text: "按下確認後訂票完成 !",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText:'取消',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    '訂票成功',
                    '請再做後續付款確認',
                    'success',
                    ) 
                }
                navigate('/banner');
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: '訂票失敗',
                text: `請確認購票資訊及付款方式是否已填寫完成 !`,
            })
        }
    }
    return(
        <section className='space-checkout section-padding'>
            <div className='space-checkout-container'>
                <div className='space-checkout-ticket'>
                    <h3>購票資訊</h3>
                    <div className='space-checkout-ticket-title'>
                        <p>旅程</p>
                        <p>出發地點</p>
                        <p>旅客資訊</p>
                        <p>張數</p>
                        <p>票價</p>
                    </div>
                    <div className='space-checkout-ticket-container'>
                        <div className='space-checkout-ticket-sixzero'>
                            <p><span>旅程 :</span> {ticket}</p>
                            <p><span>出發地點 : </span>{departure}</p> 
                            <p><span>旅客資訊 : </span></p>
                            <div>{
                                passenger?passenger.map((value)=>{
                                    return(
                                        <p key={value.number}>
                                            <span>{value.name}</span>
                                            <span>{value.email}</span>
                                            <span>{value.nationality}</span>
                                            <span>{value.number}</span>
                                        </p>
                                    )
                                }):<span>無旅客資訊</span>
                            }</div>
                            <p><span>張數 :</span>  {passenger?passenger.length:0}</p> 
                            <p><span>票價 :</span>  $ {passenger?price*passenger.length:0}</p>
                        </div>
                    </div>
                    
                    <div className='space-checkout-ticket-content'>
                        <p>{ticket}</p>
                        <p>{departure}</p>
                        <div>{
                            passenger?passenger.map((value)=>{
                                return(
                                    <p key={value.number}>
                                        <span>{value.name}</span>
                                        <span>{value.email}</span>
                                        <span>{value.nationality}</span>
                                        <span>{value.number}</span>
                                    </p>
                                )
                            }):<span>無旅客資訊</span>
                        }</div>
                        <p>{passenger?passenger.length:0}</p>
                        <p>{passenger?price*passenger.length:0}</p>
                    </div>
                </div>

                <div className='space-checkout-howtopay'>
                    <div className='space-checkout-howtopay-method'>
                        <h3>付款方式</h3>
                        <div className='space-checkout-howtopay-method-btn'>
                            <button onClick={()=>{selectWay('bank')}}>銀行轉帳</button>
                            <button onClick={()=>{selectWay('applepay')}}>Apple Pay</button>
                            <button onClick={()=>{selectWay('credit')}}>信用卡</button>
                        </div>
                    </div>
                    <Outlet savePayment={savePayment}/>
                    <p className='space-checkout-howtopay-totalprice'>總金額(含會員價折抵) : $ {total}</p>
                    <div className='space-checkout-howtopay-btn'>
                        <button onClick={checkPayment}>確認訂票</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Checkout