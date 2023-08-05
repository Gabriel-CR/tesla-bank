import Depoimento from "../../components/depoimento/Depoimento";
import * as C from "./styled";

const depoimentos = [
  {
    autor: "nikola tesla",
    depoimento:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ",
  },
  {
    autor: "steve jobs",
    depoimento:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ",
  },
  {
    autor: " Alan Turing",
    depoimento:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ",
  },
];

const Depoimentos = () => {
  return (
    <C.Container>
      <p>#DEPOIMENTOS</p>
      <h2>
        <span>TeslaBank fora das telinhas:</span> Veja o que falam sobre nosso
        serviço serviço
      </h2>
      <C.DepoimentosContainer>
        {depoimentos.map((depoimento, key) => (
          <Depoimento key={key} {...depoimento} />
        ))}
      </C.DepoimentosContainer>
    </C.Container>
  );
};

export default Depoimentos;
