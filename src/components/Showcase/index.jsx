import React,{useState,memo} from 'react'
import showcase1 from '../../assets/showcase1.png'
import showcase2 from '../../assets/showcase3.png'
import showcase3 from '../../assets/showcase2.png'
import showcase4 from '../../assets/showcase4.png'
import showcase5 from '../../assets/showcase5.png'
import './index.css'

const Showcase=()=>{
    
    const [changeImage,setChangeImage]=useState(3);
    // 左右換頁按鈕的函式
    const changePage=(num)=>{
        if(changeImage+num>5)setChangeImage(1);
        else if(changeImage+num<1)setChangeImage(5);
        else setChangeImage(state=>state+num);
    }
    // 下方小圓點跳到哪一頁面的函式
    const selectPage=(page)=>{
        setChangeImage(page);
    }
    return(
        <section className='space-showcase section-margin'>{
           
            <div> {
                changeImage===1?<img src={showcase1} alt="" />
                :changeImage===2?<img src={showcase2} alt="" />
                :changeImage===3?<img src={showcase3} alt="" />
                :changeImage===4?<img src={showcase4} alt="" />
                :<img src={showcase5} alt="" />
            }
                <button onClick={()=>changePage(1)}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
                <button onClick={()=>changePage(-1)}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                <div className="space-showcase-dot">
                    <p style={{backgroundColor:changeImage===1?'#Fa0':'rgba(255,255,255,0.945)'}} onClick={()=>selectPage(1)}></p>
                    <p style={{backgroundColor:changeImage===2?'#Fa0':'rgba(255,255,255,0.945)'}} onClick={()=>selectPage(2)}></p>
                    <p style={{backgroundColor:changeImage===3?'#Fa0':'rgba(255,255,255,0.945)'}} onClick={()=>selectPage(3)}></p>
                    <p style={{backgroundColor:changeImage===4?'#Fa0':'rgba(255,255,255,0.945)'}} onClick={()=>selectPage(4)}></p>
                    <p style={{backgroundColor:changeImage===5?'#Fa0':'rgba(255,255,255,0.945)'}} onClick={()=>selectPage(5)}></p>
                </div>
            </div>
    
        }   
        </section>
    )
}
export default memo(Showcase)