import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const inputData = useRef();
  const countInput = useRef();
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

  const randomFn = () => {
    if (countInput.current.value) {
      const shuffledPlayers = players.sort(() => Math.random() - 0.5);
      let n = Math.floor(shuffledPlayers.length / countInput.current.value);
      console.log(n);

      const teams = [];

      for (let i = 0; i < n; i++) {
        if (n - 1 === i) {
          let arr = shuffledPlayers.slice(i * countInput.current.value);
          teams.push(arr);
        } else {
          let arr = shuffledPlayers.slice(
            i * countInput.current.value,
            countInput.current.value * (i + 1)
          );
          teams.push(arr);
        }
      }

      localStorage.setItem("teams", JSON.stringify(teams));
      navigate("/about");
    } else {
      alert("Guruhlardagi o'yinchilar sonini kiriting");
    }
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

            <div className="flex items-center mb-4 mt-8 gap-x-2">
              <p className="text-white leading-4">
                Guruhlar <br /> soni:
              </p>
              <input
                type="num"
                min="2"
                ref={countInput}
                className="w-[50px] text-center py-2 px-4 rounded-lg bg-white outline-0 border-0"
              />
              <button
                onClick={randomFn}
                className="outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddPage;
