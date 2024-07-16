import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario';
import Playlist from './Componentes/Playlist/index';
import Videos from './Componentes/Videos';
import VideoUsuario from './Componentes/Videousuario';
import Footer from './Componentes/Footer/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarNuevovideo = (VideoUsuario) => {
    console.log("NUEVO VIDEO BRO", VideoUsuario)
    }
    

  const opciones = [
    {
      categoria: "Musica en Español"
    },
    {
      categoria: "Musica en Ingles"
    },
    {
      categoria: "Comedia"
    },
    {
      categoria: "Noticias"
    },
    {
      categoria: "Documental"
    },
    {
      categoria: "Otro"
    }
    
]

  return (
    <div>
      <Header />
      {mostrarFormulario === !true ? <Formulario 
      registrarNuevovideo={registrarNuevovideo} /> : <div></div> }
      <Playlist cambiarMostrar = {cambiarMostrar} />

    {
      opciones.map ((categoria) => <Videos datos={categoria}key={categoria.categoria} />)
    }

    <VideoUsuario />
    </div> 
  );
}

export default App;
