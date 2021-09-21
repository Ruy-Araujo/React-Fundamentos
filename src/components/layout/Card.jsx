import React from "react";
import "./Card.css";

// eslint-disable-next-line
export default (props) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  /* Podemos criar objetos para armazenar nosso estyle personalizado
  que será aplicado ao componente, devemos usar camelCase
  pois o js não suporta dash-case*/
  const componentStyle = {
    backgroundColor: `#${randomColor}`,
    borderColor: `#${randomColor}`,
  };


  return (
    <>
      {/* Para aplicar um inlineStyle devemos usar o {} e passar ou
    criar um objeto com as propriedades */}
      <section className="card" style={componentStyle}>
        <h1 className="card-title">{`${props.title}`}</h1>
        <div className="card-content">{props.children}</div>
      </section>
    </>
  );
};
