import Certificates from "./components/Main Components/Certificate-section/Certificates"
import Intro from "./components/Main Components/Intro"
import Projects from "./components/Main Components/Projects-section/Projects"
import TechStack from "./components/Main Components/TechStack-section/TechStack"
import About from "./components/About"
import Contact from "./components/Main Components/Contact"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
      <Intro />
      <TechStack />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
