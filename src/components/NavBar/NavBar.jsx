import "./NavBar.css";
import logo from "../../assets/a-logo-with-the-text-carmo-in-bold-black_H3kWa3pVSOO1qHt4mqqJ6A_Uzgf8ODYSWC6DlxM84vpGQ.jpeg";

import { useState } from "react";
import underline from "../../assets/imgs/search_12957877.png";
import { Anchor } from "antd";
import { TiThMenuOutline } from "react-icons/ti";

const { Link } = Anchor;

function NavBar() {

    const [menu, setMenu] = useState("home")

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact")

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    
    const toggleNav = () => {
        const menuElement = document.querySelector(".nav_container_cell")
        const menu = document.querySelector(".nav-mob-open")

        const currentleft = menuElement.style.left

        if (currentleft === "0px") {
            menuElement.style.left = "-390px"
            menu.style.color = "rgb(255, 190, 69)"
        } else {
            menuElement.style.left = "0px"
            menu.style.color = "black"
        }

    }

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />

            <Anchor className="nav_container" affix={false}>
                <ul className="nav-menu">

                    <li>
                        <Link className="linka" href="#home" title={<p onClick={() => setMenu("home")}>Home</p>} />
                        {menu === "home" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link className="linka" href="#about" title={<p onClick={() => setMenu("about")}>Sobre Mim</p>} />
                        {menu === "about" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link className="linka" href="#services" title={<p onClick={() => setMenu("services")}>Meus Projetos</p>} />
                        {menu === "services" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link className="linka" href="#work" title={<p onClick={() => setMenu("work")}>Portfólio</p>} />
                        {menu === "work" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link className="linka" href="#contact" title={<p onClick={() => setMenu("contact")}>Contato</p>} />
                        {menu === "contact" && <img src={underline} alt="underline" />}
                    </li>
                </ul>
            </Anchor>

            <div className="nav-connect" onClick={handleScrollToContact}>
                Conexão Comigo
            </div>

            <Anchor className="nav_container_cell" affix={false}>

            <TiThMenuOutline className="nav-mob-open" onClick={toggleNav}/>

                <ul className="nav-menu_cell">

                    <li>
                        <Link href="#home" title={<p onClick={() => setMenu("home")}>Home</p>} />
                        {menu === "home" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link href="#about" title={<p onClick={() => setMenu("about")}>Sobre Mim</p>} />
                        {menu === "about" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link href="#services" title={<p onClick={() => setMenu("services")}>Meus Projetos</p>} />
                        {menu === "services" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link href="#work" title={<p onClick={() => setMenu("work")}>Portfólio</p>} />
                        {menu === "work" && <img src={underline} alt="underline" />}
                    </li>
                    <li>
                        <Link href="#contact" title={<p onClick={() => setMenu("contact")}>Contato</p>} />
                        {menu === "contact" && <img src={underline} alt="underline" />}
                    </li>
                </ul>
            </Anchor>
        </div>
    )
}

export default NavBar

