import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ContenedorList/ItemListContainer';

function App() {
  const greeting = "⚡Bienvenido a Closet⚡";
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={greeting}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer/>

    </div>
  );
}

export default App;
