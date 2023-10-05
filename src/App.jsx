import './css/estilos.css'
import './index.css'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { About } from './Components/About/About.jsx'
import { Me } from './Components/Me/Me.jsx'
import { Experience } from './Components/Experience/Experience.jsx'
import { Projects } from './Components/Projects/Projects.jsx'
import { ContactMe } from './Components/ContactMe/ContactMe.jsx'
import { SocialMedia } from './Components/SocialMedia/SocialMedia.jsx'
import { Line } from './Components/Line/Line.jsx'
import { Copyright } from './Components/Copyright/Copyright.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
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
      <Line/>
      <Copyright/>
      </footer>
    </BrowserRouter>
    </>
  )
}

export default App

// service_fra19u9
// template_zo44gwf
// v91PzthZejgJx3eBZ