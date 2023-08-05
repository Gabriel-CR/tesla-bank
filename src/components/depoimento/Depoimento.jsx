import * as C from "./styled";

const Depoimento = ({ autor, depoimento }) => {
  return (
    <C.Container>
      <h3>{autor}</h3>
      <p>"{depoimento}"</p>
    </C.Container>
  );
};

export default Depoimento;
