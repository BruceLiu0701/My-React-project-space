import React,{memo} from 'react'
import './index.css'

const Copyright=()=>{
    return(
        <div className="space-copyright">
            <p>&copy; Bruce Liu 版權所有 翻印必究/ 僅供 side project 使用, 無任何商業用途</p>
        </div>
    )
}
export default memo(Copyright)