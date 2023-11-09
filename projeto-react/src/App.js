import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Fellipe';
  const newName = name.toUpperCase();

  function soma(a,b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Olá, {newName}</h1>
      <p>2 + 2 = {soma(2,2)}</p>
      <img scr={url} alt="Imagem"></img>
    </div>
  );
}

export default App;
