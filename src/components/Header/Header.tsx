import "./Header.css";
import logoSvg from "../../assets/server.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logoSvg} alt="Logo" className="logo" />
      <h1 className="logo-text">Logger UI</h1>
    </header>
  );
};

export default Header;
