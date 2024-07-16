import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import Categorias from "../Categorias/Categorias"
import Boton from "../Boton/Boton.js"

const Formulario = () => {

    const [titulo, actualizarTitulo] = useState ("");
    const [categoria, actualizarCategoria] = useState ("");
    const [URL, actualizarURL] = useState ("");
    const [descripcion, actualizarDescripcion] = useState ("");
    
    const registrarNuevovideo = (datos) => {
        console.log("registrarNuevovideo", datos);
    }


    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("manejarEnvio")
        let datosaEnviar = {
            titulo: titulo,
            categoria: categoria,
            URL: URL,
            descripcion: descripcion
        }
        registrarNuevovideo(datosaEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para agregar un video nuevo</h2>
            <CampoTexto titulo="Titulo del Video" placeholder="Ingresa un titulo para el Video" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Categorias titulo="Categoria del Video" placeholder="Ingresa una categoria para el Video" required valor={categoria} actualizarValor={actualizarCategoria}/>
            <CampoTexto titulo="URL del Video" placeholder="Ingresa la URL del Video" required valor={URL} actualizarValor={actualizarURL}/>
            <CampoTexto titulo="Descripcion del Video" placeholder="Ingresa una descripcion del Video" required valor={descripcion} actualizarValor={actualizarDescripcion}/>
            <Boton texto="Generar Video"/>
        </form> 
        
           </section>
}

export default Formulario