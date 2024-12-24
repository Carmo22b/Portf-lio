import "./Footer.css"

// import footer_logo from ""
// import user_icon from ""

function Footer() {
    return (
        <div className="footer">

            <hr />

            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    &copy; 2024 Carmo Lourenço. todos os direitos reservados.
                </p>

                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer