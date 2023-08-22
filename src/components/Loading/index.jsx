import React from 'react'
import './index.css'

const Loading=()=>{
    return(
        <div className='space-loading'>
            <div className="space-loading-box">
                <p><span className="material-symbols-outlined">rocket_launch</span></p>
                <p>讓火箭飛一下 ......</p>
            </div>
        </div>
    )
}
export default Loading