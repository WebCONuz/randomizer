import { Link } from "react-router-dom";

const Header = ({ i18n, t }) => {
  const changeLang = (e) => {
    localStorage.setItem("site_lang", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="bg-gray-100 py-2">
      <div className="container flex items-center justify-between">
        <img src="/vite.svg" className="w-10" alt="logo" />

        <nav className="flex gap-x-5">
          <Link to="/">{t("header.nav.item1")}</Link>
          <Link to="/about">{t("header.nav.item2")}</Link>
          <Link to="/support">{t("header.nav.item3")}</Link>
        </nav>

        <select onChange={changeLang}>
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
