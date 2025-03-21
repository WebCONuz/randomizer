// import { Link } from "react-router-dom";

const Header = ({ i18n, t }) => {
  const changeLang = (e) => {
    localStorage.setItem("site_lang", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="p-2 w-full">
      <div
        className="flex items-center py-2 px-3 justify-between backdrop-blur-2xl bg-[#ffffff41] rounded-2xl
      "
      >
        <img src="/vite.svg" className="w-10" alt="logo" />

        {/* <nav className="flex gap-x-5">
          <Link to="/">{t("header.nav.item1")}</Link>
          <Link to="/groups">{t("header.nav.item2")}</Link>
          <Link to="/stadium">{t("header.nav.item3")}</Link>
        </nav> */}

        <select
          onChange={changeLang}
          className="text-white bg-gray-600 outline-0 border border-white py-1 px-2 rounded-2xl"
        >
          <option hidden>{t("header.select")}</option>
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
