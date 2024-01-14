import Segundo  from "./segundoC.js"

function helloWorld(){
    return(
        <div>
            <h1>
                Hello World! primeiro componente.
            </h1>
            <Segundo/>
        </div>
    )
}

export default helloWorld

// O nome dos componentes importados deve começa com letra maiuscula, exemplo import Nome from "./nomeFuction"