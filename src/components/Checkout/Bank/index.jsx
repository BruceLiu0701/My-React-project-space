import React from 'react'
import './index.css'

const Bank=()=>{
    
    return(
        <div className='space-bank'>
            <p>
                <input type="radio" id='bank' />
                <label htmlFor="bank">銀行轉帳(訂票確認後顯示轉帳銀行帳號)</label>
            </p>
        </div>
    )
}
export default Bank