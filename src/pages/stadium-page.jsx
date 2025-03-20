import { useTranslation } from "react-i18next";

const StadiumPage = () => {
  const { t } = useTranslation();

  const randomFn = () => {
    console.log("+++");
  };
  return (
    <main className="min-h-[calc(100vh-64px)] py-4">
      <div className="container text-center">
        <h1 className="text-xl uppercase font-bold mb-4">
          {t("pages.stadium.title")}
        </h1>

        <div className="w-[60%] relative mx-auto">
          <img
            src="/images/station.jpg"
            alt="stadium"
            className="w-full rounded-2xl"
          />
        </div>

        <button
          onClick={randomFn}
          className="mt-4 outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white"
        >
          Orqaga
        </button>
      </div>
    </main>
  );
};

export default StadiumPage;
