import React from 'react';
import { BsGithub } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"

const SocialMedia = () => {
    return(
        <div className='box h-10'>
            <div className='flex w-full items-center justify-center gap-10'>
                <a href="https://github.com/LautaroJLZ" target='_blank'>
                    <BsGithub className='text-celesteOscuro dark:text-celesteClaro text-2xl hover:text-3xl transition-all'/>
                </a>

                <a href="https://www.facebook.com/lauty.jlz" target='_blank'>
                    <FaFacebookF className='text-celesteOscuro dark:text-celesteClaro text-2xl hover:text-3xl transition-all'/>
                </a>

                <a href="https://www.linkedin.com/in/lautaro-zalazar-681290248/" target='_blank'>
                    <FaLinkedinIn className='text-celesteOscuro dark:text-celesteClaro text-2xl hover:text-3xl transition-all'/>
                </a>

                <a href="https://www.youtube.com/channel/UCQtmdPf0QMmPZfsrd6ESoGQ" target='_blank'>
                    <BsYoutube className='text-celesteOscuro dark:text-celesteClaro text-2xl hover:text-3xl transition-all'/>
                </a>

            </div>
        </div>
    )
}

export { SocialMedia }