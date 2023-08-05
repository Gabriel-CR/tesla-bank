import * as C from "./styled";

const AbraSuaConta = () => {
  return (
    <C.Container>
      <h2>
        Abra sua conta <span>gratuita</span>!
      </h2>

      <p>
        Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e
        transferências com agendamento para todos os bancos sem pagar nada.
      </p>

      <C.TextContainer>
        <div>
          <h3>Seu dinheiro rendendo mais</h3>
          <p>Rendem mais que a poupança e você resgata quando quiser</p>
        </div>
        <div>
          <h3>Conta digital 100% grátis</h3>
          <p>Transferências, boletos de depósito e outros serviços gratuitos</p>
        </div>
        <div>
          <h3>Cartão sem anuidade</h3>
          <p>
            Conta digital com cartão de crédito sem anuidade e sem complicação
          </p>
        </div>
      </C.TextContainer>
    </C.Container>
  );
};

export default AbraSuaConta;
