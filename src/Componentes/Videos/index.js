import "./Videos.css"
import "../Videousuario/"
import VideoUsuario from "../Videousuario/"

const Videos = (props) => {
    return <section className="Categoria">
                <h3>{props.datos.categoria}</h3>
                <div className="Video">
                <VideoUsuario/>
                <VideoUsuario/> 
                <VideoUsuario/></div>
           </section>
}

export default Videos