import React from "react";
import './index.css'

const Applepay=()=>{
    console.log('applepay render')
    return(
        <div className="space-applepay">
            <p>
                <input type="radio" id='applepay'/>
                <label htmlFor="applepay">Apple pay (需帳戶驗證)</label>
            </p>
        </div>
    )
}
export default Applepay