import './App.css';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js';
import List from './components/list.js';

function App() {
  const nome = "João"
 
  return (
    <div className="App">
      <h1>Olá mundo</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Fellipe" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Fellipe" 
        idade="15" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
