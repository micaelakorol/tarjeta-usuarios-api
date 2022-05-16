import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './estilos/index.css'
import App from './App'
import Buscador from './componentes/Buscador';
import Post from './componentes/Post';
import Tarjeta from './componentes/Tarjeta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
<Route path='/' element={<App />}>
<Route path='buscador' element={<Buscador />} />
<Route path='tarjeta' element={<Tarjeta />} />
<Route path='tarjeta/:id' element={<Post />} />
</Route> 
  </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//Anidamos todo dentro de App , ver que Route contiene dentro a los demas componentes y se cierra al final.
//osea: la ruta de inicio, que va a contener a Buscador y post.  (agregar <Outlet /> a app.jsx)
