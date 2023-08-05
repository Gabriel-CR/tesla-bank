import * as C from "./styled";

const Card = ({ img, altImg, title, description, link, linkTitle }) => {
  return (
    <C.Container>
      <img src={img} alt={altImg} />
      <C.TextContainer>
          <h3>{title}</h3>
          <p>{description}</p>
      </C.TextContainer>
      <a href={link}>{linkTitle}</a>
    </C.Container>
  );
};

export default Card;
