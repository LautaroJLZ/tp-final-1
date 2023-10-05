import { Navbar } from './Components/Navbar/Navbar.jsx'
import { About } from './Components/About/About.jsx'
import { Me } from './components/Me/Me.jsx'
import './css/estilos.css'
import { Experience } from './Components/Experience/Experience.jsx'
import { Projects } from './Components/Projects/Projects.jsx'
import { ContactMe } from './Components/ContactMe/ContactMe.jsx'
import { SocialMedia } from './Components/SocialMedia/SocialMedia.jsx'

function App() {
  return (
    <>
    {/* Agregue este comentario para probar */}
    <header>
    <Navbar/>
    <Me/>
    <About/>
    </header>

    <main>
      <Experience/>
      <Projects/>
    </main>

    <footer>
    <ContactMe/>
    <SocialMedia/>
    </footer>
    </>
  )
}

export default App

// service_fra19u9
// template_zo44gwf
// v91PzthZejgJx3eBZ