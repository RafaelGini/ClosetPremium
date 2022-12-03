import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Anuncio from './components/Anuncio/Anuncio';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Anunciogrande from './components/Anuncio/AnuncioGrande.jsx';
import CartContextProvider from './context/cartContext';
import CartView from './components/CartView/CartView.jsx';
import Error404 from './components/Error404/Error404';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail';


function App() {
  const greeting = "⚡Envios Full a todo el País con descuento⚡";
  const anuncioGrande = "⚙️ Estamos Trabajando en Ello... ⚙️"
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter> 
        <Navbar/>
        <Anuncio anuncio={greeting}/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory/" element={<ItemListContainer/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart/" element={<CartView/>} />
          <Route path="/contacto/" element={<Anunciogrande title={anuncioGrande}/>} />
          <Route path="/purchaseDetail/:idOrder" element={<PurchaseDetail/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
    
        <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;