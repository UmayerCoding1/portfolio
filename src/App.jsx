import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Project from "./components/project/Project"
import Service from "./components/service/Service"
import Skill from "./components/skill/Skill"



function App() {
 

  return (
    <div className="bg-[#F1F1F1] max-w-6xl mx-auto">
    <Header/>
    <Navbar/>
    <About/>
    <Skill/>
    <Project/>
    <Service/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
