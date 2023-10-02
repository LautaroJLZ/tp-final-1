import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch"


const Navbar = () => {
  return(

<div>
  <nav className="w-full h-20 flex items-center justify-between bg-beige dark:bg-negro">
    
    <a href="#" className="w-1/3 max-w-[60px] ml-5 navComp">
      <img src="src/assets/logo.png" alt="logo" className="w-full"/>
    </a>

    <input type="checkbox" id="menu" className="peer hidden"/>
    
    <label 
    htmlFor="menu" 
    className="bg-open-menu w-7 h-7 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden mr-5">
    </label>

    

    <div className="fixed inset-0 translate-x-full peer-checked:translate-x-0 transition-transform md:static bg-none md:translate-x-0 bg-beige dark:bg-negro">

      <ul className="absolute inset-x-0 top-24 p-12 w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-Ubuntu font-bold text-negro md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static mr-8">

          <li className="navComp">
            <a href="#">A CERCA DE</a>
          </li>

          <li className="navComp">
            <a href="#">EXPERIENCIAS</a>
          </li>

          <li className="navComp">
            <a href="#">PROYECTOS</a>
          </li>

          <li className="navComp">
            <a href="#">CONTACTO</a>
          </li>

          <div className="md:hidden">
            <ToggleSwitch/>
          </div>
      </ul>
          
    </div>
    
    

  </nav>
  <div className="hidden md:block">
    <ToggleSwitch/>
  </div>
</div> 

)
}

export { Navbar }