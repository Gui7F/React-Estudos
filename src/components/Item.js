// Podemos definir o tipo de dado com o pacote PropTypes do react, podemos dizer neste exemplo
//que ano_lançamento é um number e marca é uma string isso pode servir para proteger o programador
// de enviar dados de tipo diferentes para as propriedades, pois o erro aparace no console do navegador

import PropTypes from "prop-types"

function Item({marca, ano_lançamento}){
    return(
        <>
         <li>{marca}, {ano_lançamento}</li>
        </>
    )
}

Item.propTypes = {
    marca : PropTypes.string,
    ano_lançamento: PropTypes.number
}

// Aqui estamos enviando o tipo de dado para cada chave do objeto oque ajuda bastante tambem na validação a nivel de programadores, que futuramente
// mexeram no seu codigo.

Item.defaultProps = {
    marca : "Faltou Marca", 
    ano_lançamento: "Faltou Ano"
}

// Aqui tambem estamos colocando outra validação que serve apenas para programadores, que é um valor padrão para o item caso ele seja 
// colocado de forma vazia na lista.

export default Item