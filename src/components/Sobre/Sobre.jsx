import "./Sobre.css"

import theme_pattern from "../../assets/imgs/search_12957877.png"
import profile_img from "../../assets/imgs/0af230fc-2b86-435f-b77b-0ceb997bb425.jpg"

function Sobre() {
    return (
        <div id="about" className="sobre">
            <div className="sobre-title">
                <h1>Sobre mim</h1>

                <img src={theme_pattern} alt="" />
            </div>

            <div className="sobre-sections">
                <div className="sobre-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="sobre-right">
                    <div className="sobre-para">
                        <p>Sou Carmo Lourenço, desenvolvedor apaixonado por tecnologia, comprometido com o aprendizado contínuo e a evolução profissional. Possuo uma base sólida em HTML5, CSS3, JavaScript e Git, além de conhecimentos em React, MySQL e Node.js. Estou constantemente aprimorando minhas habilidades para me tornar um desenvolvedor full-stack completo, apto a entregar soluções de excelência tanto no Front-end quanto no Back-end.</p>

                        <p>Meu objetivo é atuar em projetos inovadores que resolvam problemas reais e criem impacto positivo, acompanhando as mais recentes tendências tecnológicas. Valorizo ambientes dinâmicos e desafiadores, onde possa colaborar, aprender e contribuir com soluções eficientes e de alto valor.</p>
                    </div>

                    <div className="sobre-skills">
                        <div className="sobre-skill">
                            <p>HTML & CSS</p> <hr style={{width:"75%"}} />
                        </div>

                        <div className="sobre-skill">
                            <p>React JS</p> <hr style={{width:"50%"}} />
                        </div>

                        <div className="sobre-skill">
                            <p>JavaScript</p> <hr style={{width:"65%"}} />
                        </div>

                        <div className="sobre-skill">
                            <p>Node JS</p> <hr style={{width:"35%"}} />
                        </div>

                        <div className="sobre-skill">
                            <p>MySQL</p> <hr style={{width:"40%"}} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sobre-achievements">
                <div className="sobre-achievement">
                    <h1>1</h1>

                    <p>ANOS DE EXPERIÊNCIA</p>
                </div>

                <div className="sobre-achievement">
                    <h1>18+</h1>

                    <p>PROJETOS COMPLETOS</p>
                </div>

                <div className="sobre-achievement">
                    <h1>1</h1>

                    <p>CLIENTES SATISFEITOS</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre