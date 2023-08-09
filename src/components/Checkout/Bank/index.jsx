import React from 'react'
import PubSub from 'pubsub-js'
import './index.css'

const Bank=()=>{
    
    const changeState=()=>{
        PubSub.publish('whichWay','bank')
    }
    return(
        <div className='space-bank'>
            <p>
                <input type="radio" id='bank' onChange={changeState}/>
                <label htmlFor="bank">銀行轉帳(訂票確認後顯示轉帳銀行帳號)</label>
            </p>
        </div>
    )
}
export default Bank