import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Navbar from "./shared/Navbar"

function App() {

  return (
    <div className="bg-red-500">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
