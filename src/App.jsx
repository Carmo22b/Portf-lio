import './App.css'

import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Sobre from './components/Sobre/Sobre'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Sobre></Sobre>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
