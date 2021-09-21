/*
O React te a capacidade de trabalhar com renderizações 
condicionais atraves de comparadores logicos ou if/else.
*/

const condicional = (props) => {
  // Armazenamos a função que verifica se o numero é par
  const isPar = props.numero % 2 === 0;

  // É passado a expressao verificando se é par ou não
  // e renderizando conforme o tipo
  return <>{isPar ? <span>Par</span> : <span>Impar</span>}</>;
};

export default condicional;
