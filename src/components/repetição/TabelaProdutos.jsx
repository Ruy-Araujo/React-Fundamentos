import produtos from "../../data/produtos";

export default (props) => {
  const tableProdutos = produtos.map((produto) => (
    <tr key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>R${produto.preco.toFixed(2)}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{tableProdutos}</tbody>
    </table>
  );
};
