# 這是一個太空旅遊網站(This is a space tourism website)
網址 : https://my-react-project-space.vercel.app

一、︀簡介:

人類一直都有朝太空前進的夢想，太空旅遊是一種超越極限的奇幻體驗，是勇氣和探索的象徵。因此我以此為出發點，建構一個能夠直接購買太空旅行票券的網站。
在這個網站中您可以擁有彷彿置身太空的感覺，瀏覽太陽系行星的介紹，也提供三個奇幻的太空之旅供客戶挑選，還可以選擇您喜歡的太空站做為出發地點，快速簡單的了解我們的品牌理念，快來購票吧，開啟屬於您的太空旅程。


二、︀React src資料夾說明:

進入上方src資料夾
1. assets :　此資料夾存放所有project中用到的圖片。
2. components : 此資料夾存放所有project中用到的元件，命名以該元件的用途進行相關命名。
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
8. 部分元件使用React.memo及useCallback來避免不必要的重新渲染。
9. 使用nanoid模組，來作為需要動態增加減少元素的陣列遍歷的key值。
10. 使用lazyload，用戶點擊時才載入該元件，降低頁面剛掛載時的載入時間及減少載入後未使用到的網路資源。


四、︀refactor清單 :

1. css樣式重構為scss(預處理器)文件，以增加代碼的可讀性及可維護性。
2. 加入Jest或是React Testing Library的test case。
3. 進一步對元件進行關注點分離，容器元件以及展示元件等的拆分。

五、︀作品截圖 : 

 ![newpage01](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/73d248f1-894c-494f-be20-913ca186e901)

 ![newpage02](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/b174f105-dbf2-4d8d-a8d2-5989d9f9aded)

 ![newpage03](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/3084036a-255e-4d83-9ec7-071472a0807e)

 ![newpage04](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/f2ba5268-7fa4-4a5b-b738-f76b84ec1c84)

 ![newpage05](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/8879f706-67b0-42a2-91fd-ef1d69275287)

 ![newpage06](https://github.com/BruceLiu0701/My-React-project-space/assets/130199748/a7f8d5bc-91c7-4263-838f-e7b88ddb7a67)


