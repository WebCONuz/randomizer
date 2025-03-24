import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/main/header";
import { useNavigate } from "react-router-dom";

const StadiumPage = () => {
  const [reserve, setReserve] = useState([]);
  const [activePlayers, setActivePlayers] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const randomFn = () => {
    console.log("+++");
  };

  const goGroups = () => {
    navigate("/groups");
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const active = JSON.parse(localStorage.getItem("activeCommands")) || [];
    setActivePlayers(active);
    const noActive = JSON.parse(localStorage.getItem("noActiveCommand")) || [];
    setReserve(noActive);
  }, []);
  return (
    <main className="min-h-[calc(100vh-64px-188px)] py-4">
      <div className="container">
        <div className="relative w-full bg-[url(/images/bg.jpg)] bg-center bg-cover bg-no-repeat rounded-2xl">
          <div className="bg-[#000000a7] w-full min-h-[400px] rounded-2xl flex flex-col justify-center items-center pb-7">
            <Header i18n={i18n} t={t} />
            <h1 className="text-xl text-center text-white uppercase font-bold my-4">
              {t("pages.stadium.title")}
            </h1>

            <div className="w-[60%] relative mx-auto mb-6">
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 flex flex-col gap-y-4">
                {activePlayers?.[0]?.map((item, i) => (
                  <div
                    key={i + 7 + Math.random()}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="/images/player1.png"
                      alt="player-1"
                      className="w-12"
                    />
                    <p className="text-white font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 flex flex-col gap-y-4">
                {activePlayers?.[1]?.map((item, i) => (
                  <div
                    key={i + 7 + Math.random()}
                    className="flex flex-col items-center"
                  >
                    <img
                      src="/images/player2.webp"
                      alt="player-1"
                      className="w-12"
                    />
                    <p className="text-white font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <img
                src="/images/station.jpg"
                alt="stadium"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="p-3 backdrop-blur-2xl bg-[#ffffff23] rounded-xl mb-5">
              {reserve.map((item, index) => (
                <ul
                  key={index + 5 + Math.random()}
                  className="flex border border-white min-w-[400px]"
                >
                  <li className="w-[100px] py-2 text-center text-white border-r border-white">
                    Zahira {index + 1}
                  </li>
                  <li className="py-2 px-4 flex-grow text-white flex gap-x-2">
                    {item.map((play, inx) => (
                      <span
                        key={inx + 10 + Math.random()}
                        className="py-[2px] px-2 rounded-lg bg-[#ffffff2b]"
                      >
                        {play}
                      </span>
                    ))}
                  </li>
                </ul>
              ))}
            </div>

            <div className="flex gap-x-2">
              <button
                onClick={goHome}
                className="outline-none border-none rounded-lg py-2 px-6 bg-gray-700 text-white"
              >
                O'yinchi qo'shish
              </button>
              <button
                onClick={goGroups}
                className="outline-none border-none rounded-lg py-2 px-6 bg-blue-700 text-white"
              >
                Guruhlar
              </button>
              <button
                onClick={randomFn}
                className="outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white"
              >
                random
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StadiumPage;
