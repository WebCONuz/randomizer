import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "../components/main/header";

const GroupPage = () => {
  const [gruops, setGroups] = useState([]);
  const [count, setCount] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const randomFn = () => {
    if (gruops.length === 2) {
      localStorage.setItem("activeCommands", JSON.stringify(gruops));
      localStorage.setItem("noActiveCommand", JSON.stringify([]));
    } else {
      const activeGroups = gruops.filter((item) => item.length == count);
      if (activeGroups.length === 2) {
        localStorage.setItem("activeCommands", JSON.stringify(activeGroups));
        localStorage.setItem(
          "noActiveCommand",
          JSON.stringify([[...gruops[gruops.length - 1]]])
        );
      } else {
        const shuffledPlayers = activeGroups.sort(() => Math.random() - 0.5);
        const activeCommand = shuffledPlayers.slice(0, 2);
        const noActiveCommand = shuffledPlayers.slice(2);
        localStorage.setItem("activeCommands", JSON.stringify(activeCommand));

        if (count !== 1) {
          localStorage.setItem(
            "noActiveCommand",
            JSON.stringify([...noActiveCommand, [...gruops[gruops.length - 1]]])
          );
        } else {
          localStorage.setItem(
            "noActiveCommand",
            JSON.stringify([...noActiveCommand])
          );
        }
      }
    }

    navigate("/stadium");
  };

  const resetFn = () => {
    navigate("/");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teams")) || [];
    setGroups(data);
    const defaultCount = localStorage.getItem("count");
    setCount(+defaultCount);
  }, []);
  return (
    <main className="py-4">
      <div className="container">
        <div className="relative w-full bg-[url(/images/bg.jpg)] bg-center bg-cover bg-no-repeat rounded-2xl">
          <div className="bg-[#000000a7] w-full min-h-screen rounded-2xl flex flex-col items-center pb-7">
            <Header i18n={i18n} t={t} />
            <div className="flex w-full flex-grow flex-col items-center justify-center">
              <h1 className="text-xl text-center text-white uppercase font-bold my-4">
                {t("pages.groups.title")}
              </h1>

              <div className="flex flex-wrap justify-center w-full sm:w-[60%] mb-4">
                {gruops.map((item, index) => (
                  <div
                    className="w-full sm:w-1/3 px-2 mb-4"
                    key={index + Math.random()}
                  >
                    <div className="p-3 backdrop-blur-2xl bg-[#ffffff41] rounded-xl">
                      <h3 className="text-white font-bold mb-2 py-2 text-center bg-[#ffffff2e] rounded-lg">
                        {t("pages.groups.table_name")} {index + 1}
                      </h3>
                      {item.map((player, inx) => (
                        <p key={inx} className="text-lg text-[#ffffffd3] mb-2">
                          {inx + 1}. {player}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-x-2">
                <button
                  onClick={resetFn}
                  className="outline-none border-none rounded-lg py-[6px] sm:py-2 px-4 sm:px-6 text-sm sm:text-base bg-gray-700 text-white"
                >
                  {t("pages.groups.button.reset")}
                </button>
                <button
                  onClick={randomFn}
                  className="outline-none border-none rounded-lg py-[6px] sm:py-2 px-4 sm:px-6 text-sm sm:text-base bg-green-700 text-white"
                >
                  {t("pages.groups.button.next")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPage;
