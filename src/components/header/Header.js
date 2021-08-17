import "./_header.scss";
import Logo from "../logo/Logo";
import Search from "../search/Search";

function Header() {
  return (
    <header className="header">
      <Logo />
      <h1 className="mobile-title">
        <strong>image</strong> search
      </h1>
      <Search alignment="horizontal" />
    </header>
  );
}

export default Header;
