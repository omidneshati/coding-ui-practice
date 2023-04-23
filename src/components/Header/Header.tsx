import { HEADER_NAV } from "../../data/hardcodes";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-[14px] text-[#444444] capitalize">
        {HEADER_NAV.map((item) => (
          <a className="p-1" href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div>
        <button className="p-1 mr-6 underline capitalize">
          add to watchlist
        </button>
        <button className="capitalize p-2 w-[120px] h-[48px] bg-black text-white rounded-md">
          save data
        </button>
      </div>
    </header>
  );
};

export default Header;
