import "./Contact.css"

import theme_pattern from "../../assets/imgs/search_12957877.png"

import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e7ea7152-6787-4000-a4c9-9a88974955e0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Sua mensagem foi enviada com sucesso!")
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Entre em contato</h1>

                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Vamos conversar</h1>

                    <p>Fique à vontade para entrar em contato comigo! Seja para me oferecer uma oportunidade de emprego, discutir um projeto ou esclarecer dúvidas, estarei sempre disponível para conversar. Abaixo, você encontra os melhores meios para me contatar:</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <FiMail /> <p>carmolourenco2@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <FiPhoneCall /> <p>(+55) 31 9 9578-1985</p>
                        </div>

                        <div className="contact-detail">
                            <FaLinkedin /> <p>Meu Linkedin: <a href="https://www.linkedin.com/in/carmo-louren%C3%A7o-837b70319/" target="_blank"> Clique aqui</a></p>
                        </div>

                        <div className="contact-detail">
                            <FaGithub /> <p>Meu GitHub: <a href="https://github.com/Carmo22b" target="_blank"> Clique aqui</a></p>
                        </div>

                        <div className="contact-detail">
                            <FaLocationDot /> <p>MG, Brasil</p>
                        </div>

                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Seu nome</label>
                    <input type="text" placeholder="Insira seu nome" name="name"/>
                
                    <label htmlFor="">Seu email</label>
                    <input type="email" placeholder="Insira seu email" name="email"/>
                
                    <label htmlFor="">Escreva sua mensagem aqui</label>
                    <textarea name="message" rows="8" placeholder="Insira sua mensagem"></textarea>
                
                    <button type="submit" className="contact-submit">Enviar agora</button>
                </form>
            </div>
        </div>
    )
}

export default Contact