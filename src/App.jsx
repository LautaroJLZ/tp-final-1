import { Navbar } from './Components/Navbar/Navbar.jsx'
import { About } from './Components/About/About.jsx'
import { Me } from './components/Me/Me.jsx'
import './css/estilos.css'

function App() {
  return (
    <>
    <header>
    <Navbar/>
    <Me/>
    <About/>
    </header>
    <main></main>
    <footer></footer>
    </>
  )
}

export default App