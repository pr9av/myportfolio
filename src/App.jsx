import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from './components/Services/Services'
import MyWork from  './components/Mywork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const  App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>


      
    </div>
  )
}

export default App
