import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="max-w-7xl mx-auto bg-img backdrop-blur-3xl">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
