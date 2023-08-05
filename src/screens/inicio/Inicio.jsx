import * as C from "./styled";
import right_arrow from "../../assets/inicio_images/arrow_right.svg";

const Inicio = () => {
  return (
    <C.Container>
      <h1>
        TeslaBank <br /> Banco 100% digital
      </h1>
      <h2>Abrir uma conta digital nunca foi tão simples!</h2>
      <button>
        <p>Abrir uma conta</p>
        <img src={right_arrow} alt="right arrow" />
      </button>
    </C.Container>
  );
};

export default Inicio;
