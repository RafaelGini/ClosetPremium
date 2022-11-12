import './App.css';
import Navbar from './components/NavBbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Anuncio from './components/NavBbar/Anuncio/Anuncio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Anunciogrande from './components/NavBbar/Anuncio/AnuncioGrande';


function App() {
  const greeting = "⚡Envios Full a todo el País con descuento⚡";
  const anuncioGrande = "⚙️ Estamos Trabajando en Ello... ⚙️"
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Anuncio anuncio={greeting}/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory/" element={<ItemListContainer/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/contacto/" element={<Anunciogrande title={anuncioGrande}/>} />
          <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
        </Routes>
    
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;