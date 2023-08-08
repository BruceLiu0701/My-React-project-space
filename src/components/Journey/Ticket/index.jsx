import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTicket } from '../../../features/cartSlice'
import Swal from 'sweetalert2'
import './index.css'

const Ticket=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const addToCart=(destination,price)=>{
        Swal.fire({
            title: '確定要加入此旅程嗎?',
            text: "按下確認後加入購物袋 !",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:'取消',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確定'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '已加入成功',
                '請至購物袋內查看',
                'success',
              )
              dispatch(addTicket({destination,price})); 
              navigate('/journey/departure');
            }
        })
    }
    return(
        <section className='space-ticket'>
            <div className='space-ticket-item'>
                <h3>1. 水金奇幻之旅</h3>
                <p>第一站：水晶原石奇境，前往水星，參觀水晶原石礦區，探索這顆炙熱行星特有的水晶地貌，並體驗尋寶的樂趣。</p>
                <p>第二站：金星的神秘之旅，遊覽金星，體驗令人難忘的金星地表探險，包括觀賞獨有的噴射口和高原地區。</p>
                <p>第三站：太空漫遊地球，在太空遊覽船上，觀賞地球的美麗景色，從太空中俯瞰地球的奇景，感受無重力的自由。</p>
                <p>票價 : 5000 銀河幣</p>
                <div className='space-ticket-btn'>
                    <button onClick={()=>addToCart('水金奇幻之旅(水、金、地)',5000)}>加入旅程</button>
                </div>
            </div>
            <div className='space-ticket-item'>
                <h3>2. 星際奇景之旅：</h3>
                <p>第一站：熱情的火星探索，在火星基地進行模擬火星探險，體驗穿著太空服在火星表面探索的刺激，了解火星的地質和氣候特點。</p>
                <p>第二站：木星巨氣球，遊覽木星的巨氣球風暴，觀賞它壯觀的氣體特寫和伽利略衛星系統。</p>
                <p>第三站：神秘的土衛六泰坦，前往土衛六泰坦進行無重力體驗，欣賞土星的壯麗環系和泰坦的奇特地貌。</p>
                <p>票價 : 6000 銀河幣</p>
                <div className='space-ticket-btn'>
                    <button onClick={()=>addToCart('星際奇景之旅(火、木、土)',6000)}>加入旅程</button>
                </div>          
            </div>
            <div className='space-ticket-item'> 
                <h3>3. 三王星之旅</h3>
                <p>第一站：藍色巨星，前往天王星，欣賞其光線反射所產生吸引人的淺藍色外觀，觀察天王星側躺自轉帶來的極端氣候。</p>
                <p>第二站：海王星上都海王，觀賞極具魅力的深藍色外觀，其大氣層具有非常強烈的風暴，可透過虛擬實境體驗。</p>
                <p>第三站：冥王星之夢，遊覽冥王星，體驗遠離家園恍如身在不同時空的感覺，並探索冰山和冥王星的神秘表面地形。</p>
                <p>票價 : 7000 銀河幣</p>
                <div className='space-ticket-btn'>
                    <button onClick={()=>addToCart('三王星之旅(天、海、冥)',7000)}>加入旅程</button>
                </div>
            </div>
        </section>
    )
}
export default Ticket