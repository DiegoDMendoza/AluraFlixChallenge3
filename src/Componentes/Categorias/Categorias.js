import "../Categorias/Categorias.css"

const ListaOpciones = (props) => {

      
    const opciones = [
        "Musica en Español",
        "Musica en Ingles",
        "Comedia",
        "Noticias",
        "Documental",
        "Otro"
    ]

    const manejarCambio = (e) =>{
        console.log(e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
                <label>Categorias</label>
                <select value = {props.valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
                    {opciones.map((opciones, index)=> <option key={index} value={opciones}>{opciones}</option>)}
                </select>
            </div>
}

export default ListaOpciones