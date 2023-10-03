const Projects = () => {
    return(

        <div>
            <div className="box">
                <div>
                    <h1 className="p-5 text-celesteClaro text-2xl ml-20">Proyectos</h1>
                </div>

                <div className="flex-wrap flex w-full justify-evenly gap-3">

                    <div className="shadow-2xl w-64 h-64 bg-negro-claro rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center">
                        <p className="text-center text-xs">22 Febrero 2023</p>
                        <p className="text-center font-bold text-1xl">Libreria</p>
                        <button className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5">View Project</button>
                        </div>
                    </div>

                    <div className="shadow-2xl w-64 h-64 bg-negro-claro rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center">
                        <p className="text-center text-xs">24 Junio 2023</p>
                        <p className="text-center font-bold text-1xl">App de peliculas</p>
                        <button className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5">View Project</button>
                        </div>
                    </div>

                    <div className="shadow-2xl w-64 h-64 bg-negro-claro rounded-md flex flex-col pt-0">
                        <div className="h-1/2">
                            <img src="src/assets/portfolio.png" alt="project-image" className="h-full w-full rounded-t-md" />
                        </div>
                        <div className="h-1/2 flex flex-col justify-center items-center">
                        <p className="text-center text-xs">23 Junio 2023</p>
                        <p className="text-center font-bold text-1xl">Libreria</p>
                        <button className="text-celesteClaro border-celesteClaro border-2 w-fit p-2 m-2 rounded-lg text-xs mt-5">View Project</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { Projects }