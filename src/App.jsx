import { Navbar } from './Components/Navbar/Navbar.jsx'
import { About } from './Components/About/About.jsx'
import { Me } from './components/Me/Me.jsx'
import './css/estilos.css'
import { Experience } from './Components/Experience/Experience.jsx'

function App() {
  return (
    <>

    <header>
    <Navbar/>
    <Me/>
    <About/>
    </header>

    <main>
      <Experience/>
    </main>

    <footer></footer>
    </>
  )
}

export default App