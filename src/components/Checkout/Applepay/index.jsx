import React from "react";
import PubSub from "pubsub-js";
import './index.css'

const Applepay=()=>{
    
    const changeState=()=>{
        PubSub.publish('whichWay','applepay')
    }
    return(
        <div className="space-applepay">
            <p>
                <input type="radio" id='applepay' onChange={changeState}/>
                <label htmlFor="applepay">Apple pay (需帳戶驗證)</label>
            </p>
        </div>
    )
}
export default Applepay