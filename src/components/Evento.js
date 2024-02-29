

function Evento(){
    function meuEvent (){
      console.log("Ativado")
    }

    return(
      <div>
        <p>Clique para acionar o Evento.</p>
        <button className="button" onClick={meuEvent}>Ativar</button>
      </div>
    )
}

const button = document.querySelector(".button")

export default Evento