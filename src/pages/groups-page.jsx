import { useTranslation } from "react-i18next";

const GroupPage = () => {
  const { t } = useTranslation();
  return (
    <main className="min-h-[calc(100vh-64px-188px)]">
      <div className="container">
        <h1 className="py-10 text-2xl text-center text-orange-600 font-semibold">
          {t("pages.groups.title")}
        </h1>
      </div>
    </main>
  );
};

export default GroupPage;
