import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeLogo from './imagenes/Logo IF 1.png';
import { useState } from 'react';

// Para leer la img de la Api
import React, { useEffect } from "react";


/* En linea 5 Uso el hook useState para almacenar las imágenes obtenidas de la API en 
       un array. Luego, utilizo el hook useEffect en la linea 18, para realizar la petición a 
       la API al cargar el componente. */

function App() {


  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const manejarClic10 = () => {
    setNumClics(numClics + 10);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }



  const [image, setImage] = useState('');  

  
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?client_id=AcK4oG8tmFQSxyOQYXBfdydRqkU8zJ-XY2ZFjjzdcOo')
      .then(response => response.json())
      .then(data => setImage(data.urls.regular))
      .catch(error => console.log(error));
  }, []);




  return (
    <div className='App'>


      
      <div className='free-Logo-contenedor'>
        <p> Ideas Factory  -  I.F.      </p>      
        <img 
          className='free-Logo'
          src={freeLogo}
          alt='Logo free Artesanal' />

          


      <div className='imagen-contenedor'>
         <img src={image} alt="Unsplash Image" />
        
      </div>





      </div>

   

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic + 1'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton 
          texto='Clic + 10'
          esBotonDeClic={true}
          manejarClic={manejarClic10} />
          
        <Boton 
          texto='Volver a 0'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
