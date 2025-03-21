import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/add-page";
import GroupPage from "./pages/groups-page";
import StadiumPage from "./pages/stadium-page";

// import Header from "./components/main/header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("site_lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<AddPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/stadium" element={<StadiumPage />} />
      </Routes>
    </>
  );
}

export default App;
