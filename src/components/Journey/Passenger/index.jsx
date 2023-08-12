import React,{useState,Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPassenger } from '../../../features/cartSlice';
import Swal from 'sweetalert2';
import './index.css'


const Passenger=()=>{

    const [guest,setGuest]=useState([1]);   // 存放旅客人數
    const [data,setData]=useState([{}])     // 存放旅客資訊
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const enName=/^[A-Z][A-Z-\s]{3,25}$/g
    const email=/^[A-z][A-z0-9_-]{1,}@[A-z0-9_-]+\.[A-z]{2,6}$|^[A-z][A-z0-9_-]{1,}@[A-z0-9_-]+\.[A-z]{2,6}\.[a-z]{2}$/g
    const nation=/^[A-Z][a-z]{1,}$/g
    const ppnumber=/^[A-z0-9][A-z0-9]{8}$/g

    // console.log(data)
    // 受控組件的回調
    const saveData=(index,key,value)=>{
        data[index][key]=value.trim();
        setData([...data]);
    }
    // 下拉選單人數更改的回調
    const changePeople=(event)=>{
        if(event.target.value*1===2){
            setGuest(state=>([...state,2]));
            setData([...data,{}]);
        }
        else setGuest([1]);
    }
    // 點擊確認送出按鈕的回調
    const sendMessage=()=>{
    
        const newData=data.reduce((preValue,value)=>{ // 不只一個購票者資訊要判斷 這邊使用reduce
            enName.lastIndex=0;
            email.lastIndex=0;
            nation.lastIndex=0;
            ppnumber.lastIndex=0;
            return preValue+(enName.test(value.name) && email.test(value.email) && nation.test(value.nationality) && ppnumber.test(value.number)?1:0)      
        },0)
        console.log(newData)
        if (newData===data.length){     // 如果上方reduce返回的值等於陣列長度 代表都匹配正確
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
                    '已送出成功',
                    '請至購物袋內查看',
                    'success',
                  ) 
                  dispatch(addPassenger([...data]))
                  navigate('/banner');
                }
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: '格式不符',
                text: `請確認信箱或密碼格式是否輸入正確 !`,
            })
        }
    }
    return(
        <section className='space-passenger'>
            <div className='space-passenger-information'>
                <h3>購票者資訊填寫</h3>
                <div className='space-passenger-information-select'>
                    <label htmlFor="select">確認人數(一人限購兩張)</label>
                    <select name="" id="select" defaultValue='1' onChange={changePeople}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                {
                    guest.map((value)=>{
                        return(
                            <Fragment key={value}>
                                <p>第{value}位旅客資料:</p>
                                <input type="text" id='name' placeholder='請輸入護照英文名 WU YI-LING' required onInput={(event)=>saveData(value-1,'name',event.target.value)}/>

                                <input type="e-mail"placeholder='請輸入信箱帳號 a12345@google.com' required onInput={(event)=>saveData(value-1,'email',event.target.value)}/>
                            
                                <input type="text" id='nationality' placeholder='請輸入國籍 Taiwan' onInput={(event)=>saveData(value-1,'nationality',event.target.value)}/>
                            
                                <input type="text" placeholder='請輸入護照號碼 123456789' onInput={(event)=>saveData(value-1,'number',event.target.value)}/>
                            </Fragment>
                        )
                    })
                }
                <div className='space-passenger-information-btn'>
                    <button onClick={sendMessage}>確認送出</button>
                </div>
            </div>
        </section>
    )
}
export default Passenger