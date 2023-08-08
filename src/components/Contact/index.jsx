import React,{memo} from "react";
import { FacebookFilled, InstagramFilled, GoogleOutlined } from '@ant-design/icons'
import './index.css'

const Contact=()=>{
    
    return(
        <footer className="space-contact section-padding" id='contact'>
            <div className="space-contact-container">
                <div className="space-contact-item">
                    <h3>聯絡我們</h3>
                    <p><FacebookFilled/><GoogleOutlined /><InstagramFilled/></p>
                    <p>team815034@google.com</p>
                    <p>0800-123-456</p>
                </div>
                <div className="space-contact-item">
                    <h3>地點</h3>
                    <p>太陽系地球太平洋西岸台灣</p>
                    <p>營業時段 10:00~22:00(Mon. to Sun.)</p>
                    <p>點我看地圖</p>
                    <p>Space Tourism</p>
                </div>
                <div className="space-contact-item">
                    <h3>購票資訊</h3>
                    <p>購票規定</p>
                    <p>退票辦法</p>
                    <p>條款與規章</p>
                    <p>會員等級</p>
                </div>
            </div>
            <div className="space-contact-icon">
                <p>
                    <span className="material-symbols-outlined">sports_soccer</span>
                    <span className="material-symbols-outlined">sports_basketball</span>
                    <span className="material-symbols-outlined">public</span>
                    <span className="material-symbols-outlined">sports_volleyball</span>
                    <span className="material-symbols-outlined">sports_baseball</span>
                </p>
            </div>
        </footer>
    )
}
export default memo(Contact)