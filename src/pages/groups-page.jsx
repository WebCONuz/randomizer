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
        localStorage.setItem(
          "noActiveCommand",
          JSON.stringify([...noActiveCommand, [...gruops[gruops.length - 1]]])
        );
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
    <main className="min-h-[calc(100vh-64px-188px)] py-4">
      <div className="container">
        <div className="relative w-full bg-[url(/images/bg.jpg)] bg-center bg-cover bg-no-repeat rounded-2xl">
          <div className="bg-[#000000a7] w-full min-h-[400px] rounded-2xl flex flex-col justify-center items-center pb-7">
            <Header i18n={i18n} t={t} />
            <h1 className="text-xl text-center text-white uppercase font-bold my-4">
              {t("pages.groups.title")}
            </h1>

            <div className="flex flex-wrap justify-center w-[60%] mb-4">
              {gruops.map((item, index) => (
                <div className="w-1/3 px-2 mb-4" key={index + Math.random()}>
                  <div className="p-3 backdrop-blur-2xl bg-[#ffffff41] rounded-xl">
                    <h3 className="text-white font-bold mb-2 py-2 text-center bg-[#ffffff2e] rounded-lg">
                      {index + 1} GURUH
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
                className="outline-none border-none rounded-lg py-2 px-6 bg-gray-700 text-white"
              >
                Qayta random
              </button>
              <button
                onClick={randomFn}
                className="outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white"
              >
                Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPage;
