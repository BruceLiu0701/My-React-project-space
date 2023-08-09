import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import './index.css'

const rootBox=document.getElementById('root')
const root=ReactDOM.createRoot(rootBox)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>  
    </BrowserRouter>
)
export default root;
