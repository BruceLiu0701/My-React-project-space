# 這是一個太空旅遊網站(This is a space tourism website)
網址 : https://my-react-project-space.vercel.app

一、︀簡介:

人類一直都有朝太空前進的夢想，太空旅遊是一種超越極限的奇幻體驗，是勇氣和探索的象徵。因此我以此為出發點，建構一個能夠直接網站購買太空旅行的網站。
在這個網站中您可以擁有彷彿置身太空的感覺，瀏覽太陽系行星的介紹，也提供三個奇幻的太空之旅供客戶挑選，還可以選擇您喜歡的太空站做為出發地點，快速簡單的了解我們的品牌理念，快來購票吧，開啟屬於您的太空旅程。

二、︀React src資料夾說明:

進入上方src資料夾
1. assets :　此資料夾存放所有project中用到的圖片。
2. components : 此資料夾存放所有project中用到的元件，命名以該組建的用途進行相關命名。
3. features : 此資料夾存放redux toolkit中統一管理action以及reducer的各個狀態Slice。
4. routes :　此資料夾內文件用以統一管理路由，能一目了然各路由的嵌套關係。
5. store : 此資料夾存放redux toolkit的store，所有Slice都會由store統一管理。

三、︀技術以及功能介紹:

1. 此網站使用React-js框架完成建構前端部分。
2. 實現SPA(single page application)，使用react-router-dom技術，並配置路由表來統一管理路由。
3. 使用 redux toolkit 管理project中較為複雜的狀態，部分狀態使用訂閱消息(PubSub)的方式做數據傳遞。
4. 實現簡易註冊會員、︀會員登入以及會員中心功能，並使用 "正則表達式" 限制輸入內容是否符合要求，使用者需注意提示的部分。
5. 實現添加並同步旅程、︀出發地點以及購票資訊到購物車內的功能。
6. 購票資訊都填寫完成，即可由購物車進入結帳部分，提供付款方式選擇以及新增新的信用卡功能。
7. 實現 RWD (responsive web design)，在多個平台上(手機、︀平板、︀電腦)均能瀏覽使用。
8. 部分組件使用React.memo及useCallback來避免不必要的重新渲染。
9. 使用nanoid模組，來作為需要動態增加減少元素的陣列遍歷的key值。
