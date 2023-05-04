
import React, { useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Header from './component/Layout/Header/Header'
import webFont from "webfontloader"
import Footer from './component/Layout/Footer/Footer'
import Home from './component/home/Home'
import "./App.css"


const App = () => {



useEffect(()=>{
webFont.load({
    google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
})

},[])










  return ( <Router>
    <Header/>

<Routes>
<Route path='/' element={<Home/>} ></Route>


</Routes>

    <Footer/>
  </Router>
  )
}

export default App