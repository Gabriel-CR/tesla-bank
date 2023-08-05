import Card from "../../components/card/Card";
import * as C from "./styled";

import credit_card from "../../assets/cards_images/credit_card.svg";
import shopping_card from "../../assets/cards_images/shopping_card.svg";
import clock from "../../assets/cards_images/clock.svg";
import shield from "../../assets/cards_images/shield.svg";

const cards = [
  {
    img: credit_card,
    altImg: "cartão",
    title: "Cartão TeslaBank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.",
    link: "#",
    linkTitle: "Veja as opções",
  },
  {
    img: shopping_card,
    altImg: "carrinho de compras",
    title: "Investimentos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.",
    link: "#",
    linkTitle: "Conheça os investimentos",
  },
  {
    img: clock,
    altImg: "relógio",
    title: "Atendimento 24h",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.",
    link: "#",
    linkTitle: "Veja as opções",
  },
  {
    img: shield,
    altImg: "escudo",
    title: "Segurança",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.",
    link: "#",
    linkTitle: "Conheça as seguranças",
  },
];

const Inovacao = () => {
  return (
    <C.Container>
      <p>#INOVAÇÃO</p>
      <h2>
        Quais as vantagens <br /> de usar <span>TeslaBank</span>?
      </h2>

      <C.CardContainer>
        {cards.map((card, key) => (
          <Card key={key} {...card} />
        ))}
      </C.CardContainer>
    </C.Container>
  );
};

export default Inovacao;
