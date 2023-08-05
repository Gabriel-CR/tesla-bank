import * as C from "./styled";
import StoreButton from "../../components/store_button/StoreButton";

import apple_store from "../../assets/experiencia_images/apple_store.svg";
import google_play from "../../assets/experiencia_images/google_play.svg";

const Experiencia = () => {
  return (
    <C.Container>
      <h2>
        Uma nova experiência em <span>serviços financeiros</span>. <br /> Somos
        digital, somos TeslaBank.
      </h2>
      <p>
        Donec venenatis at turpis at ornare. Pellentesque a quam vel dui lacinia
        dapibus in sit amet dolor.
      </p>
      <C.ButtonContainer>
        <StoreButton
          img={apple_store}
          altImg="apple store"
          storeName="Apple Store"
        />
        <StoreButton
          img={google_play}
          altImg="google play"
          storeName="Google Play"
        />
      </C.ButtonContainer>
    </C.Container>
  );
};

export default Experiencia;
