function Pessoa2 ({foto, nome, idade, profissao}){
    return (
        <div>
        <img src= {foto}/>
        <h3>Nome: {nome}</h3>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa2

// Aqui não utilizamos a palavra props, porque passamos como argumento do componente a estrutura do objecto direto
// ou seja vai funcionar da mesma forma que utilizando props.propriedade