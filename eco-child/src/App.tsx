import Navbar from "./Components/navbar.tsx"
import Hero from "./Components/hero.tsx"
import Body from "./Components/body.tsx"
import About from "./Components/about.tsx"
import {Contact}  from "./Components/contact.tsx"
import Footer from "./Components/footer.tsx"
// import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Body/>     
      </div>
      <div>
         <About/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
           <Footer/>
      </div>

    </>
  )
}

export default App
