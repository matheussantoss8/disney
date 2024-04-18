import { Link } from "react-router-dom";
import Minnie from "../../assets/images/minnie.png";
import Logo from "../../assets/images/iconeDisney.png";
import { Search } from "../../components/Search";
import "../../styles/style.css";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-nav">
        <Link to={"/"}>
          <img src={Logo} alt="logo disney" />
        </Link>
        <Search/>
      </div>
      <div className="error-link">
        <div className="circle"></div>
        <img className="minnie" src={Minnie} alt="Nenhum person encontrado" />
        <p>Não foi encontrado nenhum personagem!</p>
      </div>
    </div>
  );
}
