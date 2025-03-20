import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GroupPage = () => {
  const [gruops, setGroups] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const randomFn = () => {
    console.log("Random");
    navigate("/support");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teams")) || [];
    setGroups(data);
  }, []);
  return (
    <main className="min-h-[calc(100vh-64px-188px)] py-4">
      <div className="container">
        <div className="relative w-full bg-[url(/images/bg.jpg)] bg-center bg-cover bg-no-repeat rounded-2xl">
          <div className="bg-[#000000a7] w-full min-h-[400px] rounded-2xl flex flex-col justify-center items-center pt-5 pb-7">
            <h1 className="text-xl text-center text-white uppercase font-bold mb-4">
              {t("pages.groups.title")}
            </h1>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {gruops.map((item, index) => (
                <div
                  key={index + Math.random()}
                  className="p-3 backdrop-blur-2xl bg-[#ffffff41] rounded-xl"
                >
                  {item.map((player, inx) => (
                    <p key={inx} className="text-lg text-[#ffffffd3] mb-2">
                      {inx + 1}. {player}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <button
              onClick={randomFn}
              className="outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white"
            >
              O'yinni boshlash
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPage;
