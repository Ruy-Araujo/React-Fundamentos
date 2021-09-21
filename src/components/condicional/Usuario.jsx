import If from "./if";

const Mensagem = (props) => (
  <>
    <If test={props.usuario && props.usuario.nome}>
      Seja Bem vindo <strong>{props.usuario.nome}</strong>
    </If>
    <If test={!props.usuario || !props.usuario.nome}>
      Seja Bem vindo <strong>Visitante</strong>
    </If>
  </>
);

export default Mensagem;
