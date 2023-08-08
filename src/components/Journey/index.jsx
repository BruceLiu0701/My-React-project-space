import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import solar from '../../assets/solar-system-component.png'
import './index.css'

const Journey=()=>{
    return(
        <div className='space-journey'>
            <div className='space-journey-banner section-padding'>
                <div className='space-journey-banner-image'>
                    <img src={solar} alt="solar-system" />
                </div>
                <div className='space-journey-banner-title'>
                    <h1>尋找你心中的嚮往之地</h1>
                </div>
            </div>
            <div className='space-journey-box'>
                <div className='space-journey-box-container '>
                    <div className='space-journey-box-list'>
                        <ul>
                            <li><NavLink to='ticket'><span className="material-symbols-outlined">flight_takeoff</span>選擇旅程</NavLink></li>
                            <li><NavLink to='departure'><span className="material-symbols-outlined">location_on</span>選擇出發太空站</NavLink></li>
                            <li><NavLink to='passenger'><span className="material-symbols-outlined">description</span>旅客資料</NavLink></li>
                        </ul>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Journey