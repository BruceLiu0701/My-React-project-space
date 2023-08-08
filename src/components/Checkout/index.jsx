import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.css'

const Checkout=()=>{

    const state=useSelector(state=>state.cart);
    const member=useSelector(state=>state.membership);
    const {ticket,departure,passenger,price}=state.information
    const navigate=useNavigate();

    const total=member.certificate[0]&&passenger&&price*passenger.length>=10000?(price*passenger.length)*95/100:price*passenger.length

    // 選擇付款方式的回調
    const selectWay=(way)=>{
        if(way==='bank')navigate('bank');
        else if(way==='applepay')navigate('applepay');
        else navigate('credit');
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
                    <Outlet/>
                    <p className='space-checkout-howtopay-totalprice'>總金額(含會員價折抵) : $ {total}</p>
                    <div className='space-checkout-howtopay-btn'>
                        <button>確認訂票</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Checkout