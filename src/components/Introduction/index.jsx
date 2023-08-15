import React from 'react'
import solar from '../../assets/solar-system.png'
import './index.css'

const Introduction=()=>{
    return(
        <header className='space-introduction section-padding'>
            <div className='space-introduction-image'>
                <img src={solar} alt="solar system" />
            </div>
            <article className='space-introduction-text'>
                <h2>九大行星介紹</h2>
                <div className='space-introduction-text-content'>
                    <p><span>1. 水星(Mercury)：</span>水星是太陽系最靠近太陽的行星，表面温度極高。遊客可以參觀其特殊的地貌，像是大大小小的撞擊坑，還有漂亮的水晶原石。</p>
                    <p><span>2. 金星(Venus)：</span>金星是太陽系中最接近地球的行星，表面溫度高達攝氏四百多度，所以這個行星主要以無人機探測為主。遊客可以在安全的虛擬實境環境中體驗金星的狀況。</p>
                    <p><span>3. 地球(Earth)：</span>我們的家園，地球上有著無數美麗的地方值得旅遊。遊客可以參加生態旅遊，探索自然美景，或是體驗不同文化的旅程。</p>
                    <p><span>4. 火星(Mars)：</span>作為太陽系中最接近地球的行星，火星引起了人們的探索興趣。遊客可以參觀火星表面的火山和峽谷，並了解關於火星冰帽和地下冰水的研究成果。</p>
                    <p><span>5. 木星(Jupiter)：</span>木星是太陽系中最大的行星，也是一個巨大的氣體行星。遊客可以參觀它壯觀的氣體風暴，還有它的衛星，像是伽利略衛星。</p>
                    <p><span>6. 土星(Uranus)：</span>土星以它壯觀的環系而聞名，遊客可以觀賞這美麗的環狀系統，也可以研究土星的衛星，像是土衛六泰坦。</p>
                    <p><span>7. 天王星(Saturn)：</span>這顆行星以它獨特的側軸傾斜而聞名，造成它極端的季節變化。遊客可以觀測這稀有的現象，還有天王星特殊的藍綠色氣體大氣層。</p>
                    <p><span>8. 海王星(Neptune)：</span>這顆行星是太陽系最遠的行星，因其遙遠和氣體巨大而挑戰性很高。遊客可以參與模擬探測任務，瞭解海王星的神秘之處。</p>
                    <p><span>9. 冥王星(Pluto)：</span>儘管冥王星已被重新分類為矮行星，但它仍然是太陽系中值得探索的目標。遊客可以參觀冥王星的冰山和地表地形。</p>
                </div>
            </article>
        </header>
    )
}
export default Introduction