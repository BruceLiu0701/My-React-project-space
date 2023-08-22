import React,{Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import Loading from './components/Loading'
import routes from './routes/routes'
import Navbar from './components/Navbar'
import Purpose from './components/Purpose'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import './App.css'

const App=()=>{
    const elements=useRoutes(routes);
    return(
        <div className='app'>
            <Navbar navbar={'navbar'}/>
            <Suspense fallback={<Loading/>}>
                {elements}
            </Suspense>
            <div className='totop'>
                <a href="#top"><span className="material-symbols-outlined">rocket</span></a>
            </div>
            <div>
                <Purpose purpose={'purpose'}/>
                <Showcase showcase={'showcase'}/>
                <Contact contact={'contact'}/>
                <Copyright copyright={'copyright'}/>
            </div>
        </div>
    )
}
export default App
