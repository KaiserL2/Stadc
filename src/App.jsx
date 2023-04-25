import NavBar from "./NavBar"
import Hero from "./Hero"
import Features from "./Features"
import Why from "./Why"
import Faq from "./Faq"


function App() {

  return (
    <div className="bg-black relative">
    
      
      <div className="mt-24 mx-0 px-7 bg-black">
        
      <NavBar />
    
        <Hero />
        <Features />
        <Why />
        <Faq />

      </div>
    
    </div>
    
  )
}

export default App

