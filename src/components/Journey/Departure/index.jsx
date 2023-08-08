import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addDeparture } from '../../../features/cartSlice'
import Swal from 'sweetalert2'
import { kennedy,whitesands,baikonur,jiuquan,dhawan } from '../images'
import './index.css'

const Departure=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const addToCart=(departure)=>{
        Swal.fire({
            title: '確定要加入此出發地嗎?',
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
                dispatch(addDeparture(departure));    
                navigate('/journey/passenger');
            }
          })
    }
    return(
        <section className='space-departure'>
            <div className='space-departure-item'>
                <div className='space-departure-item-image'>
                    <img src={kennedy} alt="甘迺迪航天中心" />
                </div>
                <div className='space-departure-title'>
                    <h3>甘迺迪航天中心<span> (Kennedy Space Center)</span></h3>
                    <p>位於美國佛羅里達州的甘迺迪太空中心是美國太空總署 (NASA) 的主要發射站，曾經是阿波羅登月任務的發射地點。</p>
                    <button onClick={()=>addToCart('甘迺迪航天中心')}>加入出發地點</button>
                </div>
            </div>
            <div className='space-departure-item'>
                <div className='space-departure-item-image'>
                    <img src={whitesands} alt="白沙飛彈靶場" />
                </div>
                <div className='space-departure-title'>
                    <h3>白沙導彈測試場 <span>(White Sands Missile Range)</span></h3>
                    <p>位於美國新墨西哥州，是美國陸軍和國家航空暨太空總署的重要發射場地，也進行過多次載人和無人太空任務的發射。</p>
                    <button onClick={()=>addToCart('白沙導彈測試場')}>加入出發地點</button>
                </div>  
            </div>
            <div className='space-departure-item'>
                <div className='space-departure-item-image'>
                    <img src={baikonur} alt="拜科努爾太空發射場" />
                </div>
                <div className='space-departure-title'>
                    <h3>拜科努爾太空發射場<span>(Baikonur Cosmodrome)</span></h3>
                    <p>位於哈薩克，是世界上最古老且最繁忙的火箭發射場，曾經是蘇聯的太空計劃主要基地，現在也由俄羅斯航天局使用。</p>
                    <button onClick={()=>addToCart('拜科努爾太空發射場')}>加入出發地點</button>
                </div>
            </div>
            <div className='space-departure-item'>
                <div className='space-departure-item-image'>
                    <img src={jiuquan} alt="中國酒泉衛星發射中心" />
                </div>
                <div className='space-departure-title'>
                    <h3>中國酒泉衛星發射中心<span>(Jiuquan Satellite Launch Center)</span></h3>
                    <p>位於中國甘肅省，是中國的主要發射場之一，用於發射衛星和載人太空任務。</p>
                    <button onClick={()=>addToCart('中國酒泉衛星發射中心')}>加入出發地點</button>
                </div>
            </div>
            <div className='space-departure-item'>
                <div className='space-departure-item-image'>
                    <img src={dhawan} alt="印度薩迪什達萬航天中心" />
                </div>
                <div className='space-departure-title'>
                    <h3>印度薩迪什達萬航天中心<span>(Satish Dhawan Space Center)</span></h3>
                    <p>位於印度安得拉邦，是印度太空研究組織(ISRO)的主要發射場，用於發射衛星和太空任務。</p>
                    <button onClick={()=>addToCart('印度薩迪什達萬航天中心')}>加入出發地點</button>
                </div>
            </div>
        </section>
    )
}
export default Departure