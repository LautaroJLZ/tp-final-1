const Me = () => {
    return(
        <div className="md:flex">
            <div className=" md:w-[30%] flex justify-center">
                <img src="src/assets/circular-Lauty.png" alt="" className="w-48 h-48"/>
            </div>
            <div className="md:w-fit ml-10 mr-10">
                <h1 className="text-negro font-bold text-6xl dark:text-celesteClaro">Lautaro Zalazar</h1>
                <p className="text-negro dark:text-beige font-Ubuntu font-bold text-3xl pt-5">Transformando ideas en soluciones funcionales y elegantes - ¡colaboremos!</p>
                <button className="button mt-10 w-full md:w-48">Descargar Curriculum</button>
            </div>
        </div>
    )
}

export { Me }