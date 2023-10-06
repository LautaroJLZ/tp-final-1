import portfolio from '../../assets/portfolio.png'
import cys from '../../assets/cys_project.jpg'
import sp from '../../assets/silicon_project.jpg'

const Projects = () => {
    return(

        <div id="projects">
            <div className="box">
                <div>
                    <h1 className="py-5 text-celesteOscuro dark:text-beige text-2xl">Proyectos</h1>
                </div>

                <div className="md:flex-wrap md:flex w-full md:justify-between">

                    <div className="my-2 md:my-0 shadow-sm md:w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0 hover:shadow-2xl transition-all">
                        <a href="https://my-portfolio-eta-sepia.vercel.app/" target="_blank" className="h-1/2">
                            <img src={portfolio} alt="project-image" className="h-full w-full rounded-t-md" />
                        </a>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">25 Abril 2023</p>
                        <p className="text-center font-bold text-1xl py-1">Portfolio solo HTML</p>
                        <a href="https://github.com/LautaroJLZ/MyPortfolio" target="_blank" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                    <div className="my-2 md:my-0 shadow-sm md:w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0 hover:shadow-2xl transition-all">
                        <a href="https://estilos-cys.vercel.app/" target="_blank" className="h-1/2">
                            <img src={cys} alt="project-image" className="h-full w-full rounded-t-md" />
                        </a>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">5 Mayo 2023</p>
                        <p className="text-center font-bold text-1xl py-1">Salon de estilos</p>
                        <a href="https://github.com/LautaroJLZ/Estilos-CyS" target="_blank" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                    <div className="my-2 md:my-0 shadow-sm md:w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0 hover:shadow-2xl transition-all">
                        <a href="https://projecto-final-silicon-misiones-zalazar-lautaro.vercel.app/" target="_blank" className="h-1/2">
                            <img src={sp} alt="project-image" className="h-full w-full rounded-t-md" />
                        </a>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">18 Abril 2023</p>
                        <p className="text-center font-bold text-1xl py-1">Proyecto final BootCamp FrontEnd</p>
                        <a href="https://github.com/LautaroJLZ/projecto-final-silicon-misiones" target="_blank" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { Projects }