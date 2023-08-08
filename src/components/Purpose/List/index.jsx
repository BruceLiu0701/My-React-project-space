import React from 'react'
import './index.css'

const List=({icon,title,text})=>{
    return(
        <div className='space-purpose-list' >
            <h3>{icon}{title}</h3>
            <p>{text}</p>
        </div>
    )
}
export default List