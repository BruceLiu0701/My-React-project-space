import React,{memo} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Menu=({openBag})=>{

    const state=useSelector(state=>state.cart);            // 使用store內的cart狀態 
    const {ticket,departure,passenger}=state.information;  // 解構賦值
    const bagBlock=()=>{
        openBag();
    }
    return(
        <>
            <li>
                <Link to='/Introduction'>星球介紹</Link>
            </li>
            <li>
                <Link to='/journey'>開啟旅程</Link>
            </li>
            <li>
                <a href="#purpose">品牌理念</a>
            </li>
            <li>
                <a href="#contact">聯絡我們</a>
            </li>
            <li>
                <Link to='/member'><span className="material-symbols-outlined">group</span></Link>
            </li>
            <li>
                <a href="#top">
                    <span className="material-symbols-outlined" onClick={bagBlock}>shopping_bag
                        <div>{!ticket&&!departure&&!passenger?0:1}</div>
                    </span>
                </a>
            </li>
        </>
    )
}
export default memo(Menu)