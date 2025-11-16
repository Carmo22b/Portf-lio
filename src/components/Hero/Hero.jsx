import "./Hero.css";
import minha_img from "../../assets/image.png";

function Hero() {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact")

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleScrollToHero = () => {
        const ResumeHero = document.getElementById("about")

        if (ResumeHero) {
            ResumeHero.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div id="home" className="hero">
            <img src={minha_img} alt="Carmo" />

            <h1>
                <span>Eu sou Carmo Lourenço,</span> Desenvolvedor Full-Stack
            </h1>

            <p>
                Conhecimentos em HTML5, CSS3, JavaScript, React, MySQL, PHP, CakePHP, Node.js e Git.
            </p>

            <div className="hero-action">

                <div onClick={handleScrollToContact} className="hero-connect">Conectar comigo</div>

                <div onClick={handleScrollToHero} className="hero-resume">Meu resumo</div>
            </div>
        </div>
    );
}

export default Hero;
