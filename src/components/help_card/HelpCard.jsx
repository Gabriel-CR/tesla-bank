import * as C from "./styled";

import drop_help from "../../assets/help_card_images/drop_help.svg";

const HelpCard = ({ title, description }) => {
  return (
    <C.Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button>
        <img src={drop_help} alt="drop help" />
      </button>
    </C.Container>
  );
};

export default HelpCard;
