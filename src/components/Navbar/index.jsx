import React,{useState,useCallback,memo} from 'react'
import Menu from './Menu'
import Cart from './Cart'
import logo from '../../assets/logo.png'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import './index.css'



const Navbar=()=>{
    
    const [toggle,setToggle]=useState(false)  // 是否顯示
    const [cart,setCart]=useState(false);     // 購物袋開關的狀態


    const openBag=useCallback(()=>{           // 避免子組件不必要的重新渲染
        setCart(state=>!state);
        setToggle(state=>!state);
    },[])

    // 關閉購物袋的回調
    const closeBag=useCallback(()=>{
        setCart(state=>!state);
    },[])
    return(
        <nav className='space-navbar'>
            <div className='space-navbar-logo'>
                <Link to='/banner'><img src={logo} alt="logo" /></Link>
                <p className='gradient-text'>Space tourism</p>
            </div>
            <div className='space-navbar-links'>
                <ul className='space-navbar-links-container'>
                    <Menu openBag={openBag}/>                    
                </ul>
            </div>
            
            {/* 購物車組件放在這兒 */}
            {cart&&<Cart closeBag={closeBag}/>}

            <div className='space-navbar-menu'>
                {toggle?<RiCloseLine color='#fff' size={27} onClick={()=>setToggle(false)}/>
                :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggle(true)}/>}
                {toggle&&(
                    <div className='space-navbar-menu-box slide-left'>
                        <div className='space-navbar-menu-box-links'>
                            <Menu openBag={openBag}/>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}
export default memo(Navbar)