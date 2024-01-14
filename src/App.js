import './App.css';
import NomesMugiwaras from './components/PropsSingle'
import Pessoa from "./components/Pessoa"
import Pessoa2 from "./components/Pessoa2"

const nami = "Nami"
const usop = 'Usop'
const chopper = 'Chopper'

function App() {
  return (
    <div className="App">
      <NomesMugiwaras nome="Luffy" />
      <NomesMugiwaras nome="Zoro" />
      <NomesMugiwaras nome="Sanji" />
      <NomesMugiwaras nome={nami} />
      <NomesMugiwaras nome={usop} />
      <NomesMugiwaras nome={chopper} />

      <Pessoa
        foto='https://via.placeholder.com/150'
        nome='Guilherme R.'
        idade='24'
        profissão='Programador'
      />
      <Pessoa2
        foto='https://via.placeholder.com/150'
        nome='William'
        idade='42'
        profissao='Metalurgico'
      />
    </div>
  );
}

export default App;

// Aqui estamos em um habiente JSX, que siginifica que pode escrever codigos em HTML que serão interpretados pelo JS.
//Tambem podemos interpolar valores de variaveis com {nome variavel}, esse isso siginfica que pode executar funções e variaveis 
// direto sem precisar inserir manualmente no HTML

// Tambem é possivel aterar atributos de elementos html, podemos por exemplo inserir uma imagem interpolando uma variavel coma imagem salva
// OBS: Maneira correta de declara class em elementos JSX(html) é com className, porque aqui neste habiente a palavra class tem conflito
// com a palavra reserva class do JS 