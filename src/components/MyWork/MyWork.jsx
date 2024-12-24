import "./MyWork.css"

import theme_pattern from "../../assets/imgs/search_12957877.png"

import mywork_data from "../../assets/MyWork_data"

function MyWork() {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>Meus Projetos</h1>

                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
                        <img src={work.w_img} />
                    </a>
                })}
            </div>

            <div className="mywork-showmore">
                <a href="https://github.com/Carmo22b" target="_blank"><p>Ver mais</p></a>

                <a href="https://github.com/Carmo22b" target="_blank"><i className="material-icons">arrow_forward</i></a>
            </div>
        </div>
    )
}

export default MyWork