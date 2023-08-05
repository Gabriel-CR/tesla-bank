import * as C from "./styled";
import menu from "../../assets/header_images/menu.svg";
import tesla_logo from "../../assets/header_images/tesla_logo.svg";
import user from "../../assets/header_images/user.svg";

const Header = () => {
  return (
    <C.Header>
      <button>
        <img src={user} alt="menu" />
      </button>
      <button>
        <img className="logo" src={tesla_logo} alt="tesla logo" />
      </button>
      <button>
        <img src={menu} alt="user" />
      </button>
    </C.Header>
  );
};

export default Header;
