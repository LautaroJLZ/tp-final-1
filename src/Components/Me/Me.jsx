const Me = () => {
    return(
        <div className="box md:flex m-auto justify-evenly">
            <div className="w-full md:w-[22%] flex justify-center align-middle items-center md:block">
                <img src="src/assets/circular-Lauty.png" alt="" className="w-1/2 h1/2 md:w-fit md:h-fit"/>
            </div>
            <div className="md:pl-5 box w-full md:w-[78%]">
                <h1 className="text-negro font-bold text-6xl md:text-7xl dark:text-celesteClaro">Lautaro Zalazar</h1>
                <p className="text-negro dark:text-beige font-Ubuntu font-bold text-3xl md:text-3xl pt-5">Transformando ideas en soluciones funcionales y elegantes - ¡colaboremos!</p>
                <button className="button mt-10 md:w-48 w-full mx-auto md:mx-0">Descargar Curriculum</button>
            </div>
        </div>
    )
}

export { Me }

