import { useState } from "react"
import "./Playlist.css"

const Playlist = (props) => {

//  const [mostrar, actualizarMostrar] = useState(true)
//  const manejarClick = () => {
//  console.log("Mostrar/Ocultar", !mostrar);
//  actualizarMostrar(!mostrar);
//  }

    return <section className="videoplaylist">
        <h3 className="title">Tus Videos Añadidos</h3>
        <img src="img/addvideo.png" alt="addvideo" onClick={props.cambiarMostrar} />
    </section>

}

export default Playlist

