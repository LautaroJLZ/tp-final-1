import react from '/src/assets/react-grande.svg'
import cppimg from '/src/assets/c-plus-plus-svgrepo-com.svg'
import css from '/src/assets/css-3-svgrepo-com.svg'
import html from '/src/assets/html-5-svgrepo-com.svg'
import javascript from '/src/assets/javascript-svgrepo-com.svg'
import java from '/src/assets/java-svgrepo-com.svg'
import ruby from '/src/assets/ruby-svgrepo-com.svg'
import tailwind from '/src/assets/tailwind-svgrepo-com.svg'
import php from '/src/assets/php-logo.svg'

const About = () => {
    return(
        <div className="box mt-5" id="about">
            <h1 className="text-5xl text-celesteOscuro dark:text-beige">A cerca de mi</h1>
            <p className="mt-5">
            Soy un estudiante de informática, tengo una sólida especialización en el desarrollo de páginas y aplicaciones web, siempre en busca de nuevos desafíos. En mi formación, he trabajado en proyectos que desafiaron mis habilidades en diseño y lógica. Mi enfoque va más allá de la mera creación de sitios, siempre busco optimizar la experiencia del usuario y crear soluciones que impacten positivamente para todos. Me encuentro en búsqueda de una oportunidad laboral que me permita aplicar mis conocimientos. A largo plazo me gustaría contribuir al desarrollo de soluciones tecnológicas innovadoras que mejoren la forma en que interactuamos en línea. ¡Espero poder ser parte de tu equipo y juntos crear un impacto positivo en el mundo digital! 
            </p> 

            <div className="flex flex-wrap justify-center">

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={react} alt="react" /> 
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={cppimg} alt="C++ logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={css} alt="CSS logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={html} alt="html logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro p-4 delay-150">
                    <img src={javascript} alt="JS logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={java} alt="Java logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={ruby} alt="Ruby logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={tailwind} alt="tailwind logo" />
                </div>

                <div className="skillCard hover:w-40 hover:h-40 hover:bg-gris dark:hover:bg-negro-claro transition-all">
                    <img src={php} alt="php Logo" />
                </div>

            </div>

        </div>
    )
}

export { About }