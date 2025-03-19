import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/add-page";
import GroupPage from "./pages/groups-page";
import StadiumPage from "./pages/stadium-page";

import Header from "./components/main/header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("site_lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);
  return (
    <>
      <Header i18n={i18n} t={t} />
      <Routes>
        <Route path="/" element={<AddPage />} />
        <Route path="/about" element={<GroupPage />} />
        <Route path="/support" element={<StadiumPage />} />
      </Routes>
    </>
  );
}

export default App;
