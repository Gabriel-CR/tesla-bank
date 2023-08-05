import * as C from "./styled";

import chave from "../../assets/footer_images/chave.svg";

const Footer = () => {
  return (
    <C.Container>
      <p>
        Copyright &copy; 2022 <span>iuricode.com</span>. <br /> Todos os
        direitos reservados.
      </p>
      <div>
        <p>Powered by</p>
        <img src={chave} alt="Chave" />
      </div>
    </C.Container>
  );
};

export default Footer;
