import React,{useState,useRef} from 'react'
import { useDispatch } from 'react-redux'
import { addNewMember } from '../../../features/membershipSlice'
import Swal from 'sweetalert2'
import './index.css'

const Register=({changeInput})=>{

    const [application,setApplication]=useState({userName:"",userEmail:"",userPassword:""})
    const recheck=useRef();
    const dispatch=useDispatch();
    const username=/^[A-z]\w{4,20}$/g;     // 正則表達式
    const email=/^[A-z][A-z0-9_-]{1,}@\w+\.[A-z]{2,6}$|\.[a-z]{2}$/g; // 兩種結尾方式
    const password=/^[A-z]\w{7,20}$/g  

    // 受控組件的回調
    const getData=(key,value)=>{
        application[key]=value.trim();   //去空格
        setApplication({...application})
    }

    const checkUser=()=>{
        const {userName,userEmail,userPassword}=application
        const {value}=recheck.current
        username.lastIndex=0;
        email.lastIndex=0;
        password.lastIndex=0;
        if(username.test(userName)&&email.test(userEmail)&&password.test(userPassword)&&userPassword===value){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '會員申請成功',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(addNewMember(application));
            changeInput();
            return
        }
        Swal.fire({
            icon: 'error',
            title: '註冊失敗',
            text: `請檢查資料格式是否輸入正確`,
        })
        
    }
    return(
        <div className='space-register'>
            <h3>註冊會員</h3>
            <div className='space-register-user'>
                <input type="text"  id='text' placeholder='請輸入使用者名稱'  onInput={(event)=>getData('userName',event.target.value)}/>
                <div>
                    <p>最少5個位元，需英文大小寫字母開頭</p>
                </div>
                <input type="e-mail" placeholder='請輸入信箱' onInput={(event)=>getData('userEmail',event.target.value)}/>
                <div>
                    <p>標準信箱格式</p>
                </div>
                <input type="password" placeholder='請輸入密碼' onInput={(event)=>getData('userPassword',event.target.value)}/>
                <div>
                    <p>最少8個位元，需英文大小寫字母開頭</p>
                </div>
                <input type="password" placeholder='再次確認密碼' ref={recheck}/>
            </div>
            <div className='space-register-btn'>
                <p>已有帳戶&nbsp;<span onClick={changeInput}>點我登入</span></p>
                <button onClick={checkUser}>加入會員</button>
            </div>
        </div>
    )
}
export default Register