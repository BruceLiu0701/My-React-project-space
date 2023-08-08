import React,{useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { whoLogIn,register,goToCenter,LogOut } from '../../features/membershipSlice'
import Swal from 'sweetalert2'
import Center from './Center'
import Register from './Register'
import './index.css'

const Member=()=>{
     
    const email=useRef();
    const password=useRef();
    const state=useSelector(state=>state.membership)  
    const {login,center}=state.membership            // login狀態用以更新註冊會員還是會員登入框, true表示會員登入框, center切換會員中心

    const dispatch=useDispatch();
    const regEmail=/^[A-z][A-z0-9_-]{1,}@[A-z0-9_]+\.[A-z]{2,6}$|\.[a-z]{2}$/g;   //正則表達式
    const regPassword=/^[A-z][A-z0-9_]{7,20}$/g;

    console.log('userData',state.userData);
    // 登出的回調
    const handleLogout=()=>{
        dispatch(LogOut());
    }
    // 切換註冊會員還是會員登入框的函式
    const changeInput=()=>{
        dispatch(register());
    }

    // 處理點擊登入後的函式
    const signIn=()=>{
        regEmail.lastIndex=0;     // 先讓lastIndex屬性歸0, 下一次也是從頭開始匹配
        regPassword.lastIndex=0;
        if(!regEmail.test(email.current.value.trim())||!regPassword.test(password.current.value.trim())){
            Swal.fire({
                icon: 'error',
                title: '格式不符',
                text: `請確認信箱或密碼格式是否輸入正確 !`,
            })
        }else{
            const newArr=state.userData.filter((value)=>{       // 返回信箱和密碼匹配相同的新陣列
                return value.userEmail===email.current.value && value.userPassword===password.current.value
            })
            if(newArr.length){      // 返回陣列長度為0,表示沒有相同信箱密碼的會員
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '會員登入成功',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(whoLogIn(newArr[0].userName)); 
                dispatch(goToCenter());

            }else{
                Swal.fire({
                    icon: 'error',
                    title: '登入失敗',
                    text: `請確認是否已完成註冊，或您的信箱及密碼是否輸入正確`,
                })
            }
        }    
    }
    return(
        <div className='space-member section-padding'>{
            center?<Center handleLogout={handleLogout}/>:login?(<div className='space-member-login'>
                <h3>會員登入</h3>
                <div className='space-member-login-e-mail'>
                    <input type="e-mail"  id='email' required placeholder='請輸入信箱' ref={email}/>
                    <span className="material-symbols-outlined">mail</span>
                </div>
                <div className='space-member-login-password'>
                    <input type="password"  id='password' required placeholder='請輸入密碼' ref={password}/>
                    <span className="material-symbols-outlined">lock</span>
                </div>
                <div className='space-member-login-checkbox'>
                    <input type="checkbox" id='remember'/>
                    <label htmlFor="remember">記住我</label>
                    <a href="#top">忘記密碼</a>
                </div>
                <div className='space-member-btn'>
                    <p>沒有帳戶嗎?&nbsp;<span onClick={changeInput}>點我註冊</span></p>
                    <button onClick={signIn}>登入</button>
                </div>
            </div>):<Register changeInput={changeInput}/>
        }</div>
    )
}
export default Member