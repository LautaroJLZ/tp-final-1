const Experience = () => {
    return(
        <div className='box'>
            <h1 className="text-3xl ml-10 font-bold text-celesteOscuro">Experience</h1>
            <div className='w-full md:w-[30%] m-auto md:m-0 shadow-2xl p-10 mb-10'>
            <h2 className="text-celesteOscuro text-2xl font-bold">React Developer intern</h2>
            <p className="text-xs py-5 ">Febrero 2023 - Marzo 2023</p>
            <ul className="list-disc text-justify text-sm">
                <li>Diseño y desarrollo de interfaz de usuario, usando React y material UI</li>
                <li>Optimizar el rendimiento de la aplicación reduciendo el tiempo de renderizado y minimizando las solicitudes de red.</li>
                <li>Participar en revisiones, testing y debugging de código para garantizar la calidad y estabilidad del software.</li>
                <li>Solución de problemas y debugging de problemas que surgen durante el desarrollo en producción.</li>
            </ul>
            </div>
        </div>
    )
}

export { Experience }