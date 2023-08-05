import HelpCard from "../../components/help_card/HelpCard";
import * as C from "./styled";

const helpers = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
  },
];

const Ajuda = () => {
  return (
    <C.Container>
      <p className="subtitle">#AJUDA</p>
      <h2>Ficou alguma dúvida?</h2>
      <p>Nullam ornare eu nisi fringilla consectetur. Suspendisse potenti.</p>

      <div>
        {helpers.map((help, index) => (
          <HelpCard key={index} {...help} />
        ))}
      </div>
    </C.Container>
  );
};

export default Ajuda;
