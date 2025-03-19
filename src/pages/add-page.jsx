import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const AddPage = () => {
  const [players, setPlayers] = useState([]);
  const { t, i18n } = useTranslation();
  const inputData = useRef();
  const addPlayer = () => {
    setPlayers([...players, inputData.current.value]);
    localStorage.setItem(
      "players",
      JSON.stringify([...players, inputData.current.value])
    );
    inputData.current.value = "";
  };

  const removePlayer = (p) => {
    const newP = players.filter((item) => item !== p);
    setPlayers(newP);
    localStorage.setItem("players", JSON.stringify(newP));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(data);
  }, []);
  return (
    <main className="min-h-[calc(100vh-64px-188px)] py-4">
      <div className="container">
        <div className="relative w-full bg-[url(/images/bg.jpg)] bg-center bg-cover bg-no-repeat rounded-2xl">
          <div className="bg-[#000000a7] w-full min-h-[400px] rounded-2xl flex flex-col justify-center items-center pt-5 pb-7">
            <h1 className="text-xl text-center text-white uppercase font-bold mb-4">
              {t("pages.add.title")}
            </h1>
            <div className="flex">
              <input
                type="text"
                ref={inputData}
                className="outline-none border-none rounded-l-lg py-2 px-4 w-[350px] bg-white mb-4"
                placeholder="Add new player"
              />
              <button
                onClick={addPlayer}
                className="outline-none font-semibold border-none rounded-r-lg py-2 px-4 bg-gray-400 mb-4"
              >
                Create
              </button>
            </div>

            {players.map((item, index) => (
              <ul key={index} className="flex w-[400px] border border-white">
                <li className="w-[50px] py-2 text-center text-white border-r border-white">
                  {index + 1}
                </li>
                <li className="w-[350px] py-2 px-4 text-white flex justify-between items-center">
                  <span>{item}</span>
                  <button
                    onClick={() => removePlayer(item)}
                    className="ounline-0 border-0 rounded-lg py-1 px-2 text-xs font-medium bg-red-200 text-red-600"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            ))}

            <button className="outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white mb-4 mt-8">
              Random
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddPage;
