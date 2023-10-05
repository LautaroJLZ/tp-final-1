import React from 'react';
import { AiFillCopyrightCircle } from "react-icons/ai"

const Copyright = () => {
    return(
        <div className='flex w-full justify-center gap-2 items-center h-10 mb-20'>
            <AiFillCopyrightCircle className='text-celesteOscuro dark:text-celesteClaro'/>
            <p className='text-celesteOscuro dark:text-celesteClaro'>Todos los derechos reservados</p>
        </div>
    )
}

export { Copyright }