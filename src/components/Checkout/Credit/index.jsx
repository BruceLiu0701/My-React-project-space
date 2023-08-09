import React,{useState,useRef} from 'react'
import PubSub from 'pubsub-js';
import Swal from 'sweetalert2';
import './index.css'

const Credit=()=>{

    const [addCard,setAddCard]=useState(false);
    const [yourCard,setYourCard]=useState(false);
    const [card,setCard]=useState({});
    const radio=useRef();

    const cardnum=/^[0-9][0-9]{15}$/g
    const deadline=/^0[1-9]{1}[2-9]{2}$|^1[0-2]{1}[2-9]{2}$/g
    const safety=/^[0-9]{3}$/g

    // 新增卡片輸入欄出現的回調
    const addNewCard=()=>{
        if(!card.cardNum)setAddCard(state=>!state);
    }
    // 刪除卡片的回調
    const removeCard=()=>{
        if (yourCard){
            Swal.fire({
                title: '確認刪除卡片嗎 ?',
                text: "按下確認後刪除卡片 !",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText:'取消',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    '已新增卡片成功',
                    '',
                    'success',
                    ) 
                }
                setCard({});
                setYourCard(false);
                return
            })
        }
        Swal.fire({
            icon: 'warning',
            title: '沒有可刪除信用卡',
            text: `請先新增信用卡喔 !`,
        })

        
    }
    // 受控組件的回調
    const cardData=(key,value)=>{
        card[key]=value.trim();
        setCard({...card})
    }
    // 改變是否選擇此信用卡的回調
    const checkRadio=()=>{
        radio.current.checked=!radio.current.checked;
        if(radio.current.checked) PubSub.publish('whichWay','credit')
    }
    // 送出信用卡資料的回調
    const regCheck=()=>{

        cardnum.lastIndex=0;
        deadline.lastIndex=0;
        safety.lastIndex=0;
        if(cardnum.test(card.cardNum)&&deadline.test(card.lastDate)&&safety.test(card.safetyNum)){
            Swal.fire({
                title: '確認送出資料嗎 ?',
                text: "按下確認後送出資料 !",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText:'取消',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    '已新增卡片成功',
                    '',
                    'success',
                    ) 
                }
                setAddCard(state=>!state)
                setYourCard(state=>!state)
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: '格式不符',
                text: `請確認卡片資料是否輸入正確 !`,
            })
        }  
    }
    return(
        <div className='space-credit'>
            <div className='space-credit-title'>
                <h3>選擇付款帳戶</h3>
            </div>
            <div className='space-credit-newcard'>
                <div className='space-credit-newcard-button'>
                    <button onClick={addNewCard}>+新增付款信用卡</button>
                    <button onClick={removeCard}>刪除信用卡</button>
                </div>
                
                {yourCard&&
                <div className='space-credit-newcard-another-box'>
                    <input type="radio" ref={radio}/>
                    <div className='space-credit-newcard-another' onClick={checkRadio}>
                        <p>卡號 : {card.cardNum}</p>
                    </div>
                </div>}
                {addCard&&(<div className='space-credit-newcard-data'>
                    <p>卡片資訊 :</p>
                    <input type="text" placeholder='請輸入卡號' required onInput={(event)=>{cardData('cardNum',event.target.value)}}/>
                    <input type="text" placeholder='請輸入到期日0627' required onInput={(event)=>{cardData('lastDate',event.target.value)}}/>
                    <input type="text" placeholder='請輸入持卡人姓名' required onInput={(event)=>{cardData('name',event.target.value)}}/>
                    <input type="password" placeholder='請輸入安全驗證碼000' required onInput={(event)=>{cardData('safetyNum',event.target.value)}}/>
                    <button onClick={regCheck}>確認送出</button>
                </div>)}
            </div>
        </div>
    )
}
export default Credit