function Pessoa(props){
  return(
    <div>
        <img src= {props.foto}/>
        <h3>Nome: {props.nome}</h3>
        <p>Idade: {props.idade}</p>
        <p>Profissão: {props.profissão}</p>
    </div>
  )
}

export default Pessoa