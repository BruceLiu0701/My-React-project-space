import React,{useState,Fragment,memo} from 'react'
import showcase1 from '../../assets/showcase1.png'
import showcase2 from '../../assets/showcase2.png'
import showcase3 from '../../assets/showcase3.png'
import './index.css'

const Showcase=()=>{
    
    const images=[showcase1,showcase2,showcase3]
    const [photo,setPhoto]=useState({num:1,direction:true});

    const rightImage=(number)=>{
        if(photo.num+number>2) setPhoto({num:0,direction:true});
        else setPhoto({num:photo.num+number,direction:true});
    }
    const leftImage=(number)=>{
        if(photo.num+number<0)setPhoto({num:2,direction:false});
        else setPhoto({num:photo.num+number,direction:false})
    }
    return(
        <section className='space-showcase section-margin'>{
            images.map((value,index)=>{
                if(index===photo.num){
                    return(
                        <div key={index+value}> {/* 這邊圖片僅展示用, 目前沒有要添加新的圖片,暫時使用index代替  */}
                            <img src={value} alt="" className={photo.direction?"scale-in-hor-left":"scale-in-hor-right"}/>
                            <button onClick={()=>rightImage(1)}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
                            <button onClick={()=>leftImage(-1)}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                        </div>
                    )
                }return <Fragment key={index+value}></Fragment>
            })    
        }   
        </section>
    )
}
export default memo(Showcase)