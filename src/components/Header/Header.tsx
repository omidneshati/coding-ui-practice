import { HEADER_NAV } from "../../data/hardcodes";

const Header = () => {
  return (
    <nav>
      <div>
        {HEADER_NAV.map((item) => (
          <a>{item}</a>
        ))}
      </div>
      <a>add to watchlist</a>
      <button>save data</button>
    </nav>
  );
};

export default Header;
