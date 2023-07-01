import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  )
}

export default App
