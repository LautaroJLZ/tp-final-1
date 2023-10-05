const Projects = () => {
    return(

        <div>
            <div className="box">
                <div>
                    <h1 className="py-5 text-celesteOscuro dark:text-beige text-2xl">Proyectos</h1>
                </div>

                <div className="flex-wrap flex w-full justify-between">

                    <div className="shadow-2xl w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">22 Febrero 2023</p>
                        <p className="text-center font-bold text-1xl py-1">Libreria</p>
                        <a href="#" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                    <div className="shadow-2xl w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">24 Junio 2023</p>
                        <p className="text-center font-bold text-1xl py-1">App de peliculas</p>
                        <a href="#" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                    <div className="shadow-2xl w-[30%] h-fit bg-beige dark:bg-negro-claro text-negro dark:text-beige rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center py-6">
                        <p className="text-center text-xs py-1">23 Junio 2023</p>
                        <p className="text-center font-bold text-1xl py-1">Libreria</p>
                        <a href="#" className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5"> Ver Proyecto</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { Projects }