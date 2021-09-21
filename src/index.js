// import necessario para o react trabalhar com a dom
import ReactDOM from 'react-dom'
// import que permite o react trabalhar com html no codigo.
import React, { Fragment } from 'react'
// importando o style do arquivo
import './index.css'
// importando modulos do react (podemos usar o nome que quiser)
/* import NomeModulo from './components/base/ComponenteSemParametros'

ReactDOM.render(
    <NomeModulo></NomeModulo>,
    document.getElementById('root'))
 */

    // -----------------------------
/*     
import Parametros from './components/base/ComponenteComParametros'
ReactDOM.render(
    // A teg react pode ser utilizada de duas formas, abrindo e fechando em duas tags
    // ou abrindo e fechando na mesma tag ex:
    // <MinhaTag></MinhaTag>
    // <MinhaTag />    
    <Fragment>
        <Parametros titulo="Meu titulo" texto='somo text here!'></Parametros>
        { /* Podemos utilizar o mesmo componente n vezes  }
        <Parametros titulo='Outro titulo' texto={123456} />
    </Fragment>
    , document.getElementById('root'))
*/    

// -----------------------------------
// Para facilitar e deixar o codigo mais clean
// podemos criar um modulo app e deixar o index de lado.

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)