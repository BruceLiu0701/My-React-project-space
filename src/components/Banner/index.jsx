import React from 'react'
import { useNavigate } from 'react-router-dom'
import spaceship from '../../assets/spaceship.png'
import './index.css'

const Banner=()=>{

    const navigate=useNavigate();
    // get started的回調
    const goToJourney=()=>{
        navigate('/journey');
    }
    return(
        <header className='space-banner section-padding'>
            <div className='space-banner-title'>
                <div className='space-banner-title-container'>
                    <h1>Space Tourism</h1>
                    <p>就算我們不抬頭仰望，星空也永遠注視著我們，等待著我們去發掘宇宙的奧秘。是時候來一段奇幻的星際旅程吧 !</p>
                </div>
                <div className='space-banner-image'>
                    <img src={spaceship} alt="spaceship" />
                </div>
            </div>
            <div className='space-banner-start-btn'>
                <button onClick={goToJourney}>Get Started</button>
            </div>
        </header>
    )
} 
export default Banner
