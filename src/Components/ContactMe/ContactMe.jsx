import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fra19u9",
        "template_zo44gwf",
        form.current,
        "v91PzthZejgJx3eBZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    return(
      <div className='box' id='contactMe'> 
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full m-auto my-10 '>

          <div className='w-full md:flex md:justify-between'>

            <input type="text" name="user_name" placeholder='Nombre Completo' className='md:w-[49.5%] w-full p-3 rounded-md placeholder-negro shadow-2xl dark:bg-negro-claro dark:placeholder-beige' />
            <input type="email" name="user_email" placeholder='Email' className='md:w-[49.5%] w-full mt-2 md:mt-0 p-3 rounded-md placeholder-negro shadow-2xl dark:bg-negro-claro dark:placeholder-beige'/>
            
          </div>

          <input type="text" name="user_field" placeholder='Asunto' className='placeholder-negro p-3 rounded-md mt-2 shadow-2xl dark:bg-negro-claro dark:placeholder-beige' />

          <textarea name="message" placeholder='Mensaje' className='placeholder-negro p-3 rounded-md mt-2 shadow-2xl resize-none h-40 dark:bg-negro-claro dark:placeholder-beige'/>

          <input type="submit" value="Enviar Mensaje" className='w-fit p-3 rounded-md text-beige bg-celesteOscuro font-bold text-xs cursor-pointer dark:bg-celesteClaro dark:text-negro my-2'/>

        </form>
        
      </div>
    )
}

export { ContactMe }