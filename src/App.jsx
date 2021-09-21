/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import SemParametros from "./components/base/ComponenteSemParametros";
import ComParametros from "./components/base/ComponenteComParametros";
import Random from "./components/base/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/layout/Familia";
import FamiliaMembro from "./components/layout/FamiliaMembro";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import Condicional from "./components/condicional/Condicional";
import Mensagem from "./components/condicional/Usuario";

// Podemos utilizar arrow function em nossos componentes
// para redizir e simplificar a função
// O "_" é utilizado para demonstrar que nossa funcão possui apenas um unico parametro
// Se não houvese parametros poderiamos deixar apenas com as ()
export default (_) => (
  // Na arrow function não precisamos utilizar as {} e nem o return

  <Fragment>
    <Card title="Componente sem parametros">
      <SemParametros />
    </Card>

    <Card title="Componente com parametros">
      <ComParametros titulo="Titulo" texto="texto" />
    </Card>

    <Card title="Numero Aleatorio">
      <Random min={0} max={100} />
    </Card>

    <Card title="Componente com children">
      <Familia lastName="Silva">
        <FamiliaMembro firstName="Jose" />
        <FamiliaMembro firstName="Maria" />
        <FamiliaMembro firstName="Pedrinho" />
      </Familia>
    </Card>

    <Card title="Tabela Produtos">
      <TabelaProdutos />
    </Card>

    <Card title="Renderização Condicional">
      <Condicional numero={25} />
      <Mensagem usuario={{ nome: "Jõao" }} />
    </Card>
  </Fragment>
);
