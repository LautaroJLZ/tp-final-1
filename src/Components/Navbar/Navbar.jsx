import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home">
      
      <nav className="w-full h-20 flex items-center justify-between bg-beige dark:bg-negro">

        <a href="#home" className="w-1/3 max-w-[60px] ml-5 navComp">
          <img src={logo} alt="logo" className="w-full" />
        </a>

        <input type="checkbox" id="menu" className="peer hidden" />

        <label
          htmlFor="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className=" w-7 h-7 bg-cover bg-center cursor-pointer transition-all z-50 md:hidden mr-5"
        >
          {menuOpen ? (
            <FaTimes className="w-full h-full text-celesteOscuro dark:text-celesteClaro " />
          ) : (
            <FaBars className="w-full h-full text-celesteOscuro dark:text-celesteClaro" />
          )}
        </label>

        <div
          className={`fixed inset-0 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform md:static bg-none md:translate-x-0 bg-beige dark:bg-negro`}
        >
          <ul className="absolute inset-x-0 top-24 p-12 w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-Ubuntu font-bold text-negro md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static mr-8">
            <li className="navComp">
              <a href="#abot">A CERCA DE</a>
            </li>

            <li className="navComp">
              <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>
                EXPERIENCIAS
              </a>
            </li>

            <li className="navComp">
              <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>
                PROYECTOS
              </a>
            </li>

            <li className="navComp">
              <a href="#contactMe" onClick={() => setMenuOpen(!menuOpen)}>
                CONTACTO
              </a>
            </li>

            <div className="md:hidden">
              <ToggleSwitch onClick={() => setMenuOpen(!menuOpen)} />
            </div>
          </ul>
        </div>

      </nav>

      <div className="hidden md:block">
        <ToggleSwitch />
      </div>
      
    </div>
  );
};

export { Navbar };
