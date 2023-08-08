import React,{memo}from 'react'
import List from './List'
import {nanoid} from'nanoid'
import potrait from '../../assets/potrait.jpg'
import './index.css'

const content=[
    {
        id:nanoid(),
        icon:<span className="material-symbols-outlined">health_and_safety</span>,
        title:'安全第一',
        text:'在太空旅遊中，我們以最先進的科技與無比嚴謹的安全措施，確保每一位勇敢踏足星際的太空探險家都能安心享受獨一無二的太空之旅。'
    },
    {
        id:nanoid(),
        icon:<span className="material-symbols-outlined">folded_hands</span>,
        title:'心靈昇華',
        text:'你將與尖端科學家、宇宙學家攜手，共同揭開宇宙的神秘面紗。讓我們一同投入無限星辰的懷抱，感受無邊宇宙的奧秘，並在這片無垠星空下重新發現自己。'
    },
    {
        id:nanoid(),
        icon:<span className="material-symbols-outlined">eco</span>,
        title:'環保原則',
        text:'太空旅遊之外，我們致力於保護太空的淨土。堅守環保原則，秉持著愛護地球的初心，以及保護宇宙資源的使命，將這份愛護與責任傳承下去。'
    },
]

const Purpose=()=>{
    return(
        <div className='space-purpose section-margin' id='purpose'>
            <div className='space-purpose-container'>
                <div className='space-purpose-container-image'>
                    <img src={potrait} alt="potrait" />
                    <h3>since 2023</h3>
                </div>
                <div className='space-purpose-container-text'>
                    <h1>遨遊星域，靜觀銀河，探索無限可能</h1>
                    <p>太空旅遊是一種超越極限的奇幻體驗，是勇氣和探索的象徵。我們將太空旅遊視為一種心靈的啟航，帶領旅客進入無垠宇宙，體驗前所未有的震撼與感動。夢想與科技交織，無限可能的未來正在向我們招手。讓我們攜手開啟屬於人類的新篇章。</p>
                </div>
            </div>
            <div className='space-purpose-text'>{
                content.map((value)=>{
                    return(
                        <List key={value.id} icon={value.icon} title={value.title} text={value.text}/>
                    )
                })
            }</div>
        </div>
    )
}
export default memo(Purpose)