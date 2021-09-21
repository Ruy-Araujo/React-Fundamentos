import React, { Fragment } from "react";

// Um componente com parametros precisa obrigatoriamente
// utilizar o props como paramentro da funcão
// assim quando invocarmos essa função no index.js
// podemos passar qualquer parametro desejado
// preenchendo assim as lacunas do nosso codigo html

export default function Parametros(props) {
  // O react só permite renderizar uma tag html por vez
  // porem podemos aninhar essas tags em uma div
  // ou podemos utilizar o Fragmente que nos permite
  // renderizar diversas tags dentro dele.

  // Podemos tambem criar variaveis dentro da nossa função.
  // Por exemplo uma validação de if/else
  // <comparação> ? <if true> : <else false>
  const isText =
    typeof props.texto === "string" ? (
      props.texto
    ) : (
      <strong>'texto invalido'</strong>
    );

  // As props são imutaveis (somente leitura) ou seja não podemos editar diretamente elas.
  // Para contornar isso podemos atribuir elas a uma variavel e assim alteralas.
  return (
    <Fragment>
      <h1>{props.titulo}</h1>
      <p>{isText}</p>
    </Fragment>
  );
}
