import logo from './logo.svg';
import './App.css';
import BarraNav from './componentes/NavBar/NavBar.js'
import ItemComponentContainer from './componentes/ItemComponentContainer/ItemComponentContainer.js';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <BarraNav />
      <header className="App-header">
        <ItemComponentContainer greeting="¡Bienvenido a la Tienda Virtual!"/>
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount stock={20} inicial={1} />
      </header>
    </div>
  );
}

export default App;
