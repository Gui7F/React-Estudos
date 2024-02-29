import './App.css';
import Evento from "./components/Evento"
import Form from "./components/FormEvent"

function App() {
 const name = 'Mokey D. Luffy'

 function calculaNUM (A,B){
   
   return eval(A, B)
 }

 const calculoEval = calculaNUM('40/2')

 const placeHolder = 'https://via.placeholder.com/300'


  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento></Evento>

      <Form/>
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