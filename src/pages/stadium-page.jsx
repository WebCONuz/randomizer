import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/main/header";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

const StadiumPage = () => {
  const [reserve, setReserve] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

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
    const active = JSON.parse(localStorage.getItem("activeCommands"));
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

            {/* <Draggable bounds="parent"> */}
            <div className="w-[60%] relative mx-auto mb-6">
              <img
                src="/images/station.jpg"
                alt="stadium"
                className="w-full rounded-2xl"
              />

              {/* <Draggable onDrag={handleDrag}>
                  <div
                    style={{
                      width: "200px",
                      height: "100px",
                      background: "lightcoral",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "move",
                    }}
                  >
                    Drag Me!
                    <p>
                      X: {position.x}, Y: {position.y}
                    </p>
                  </div>
                </Draggable> */}
            </div>
            {/* </Draggable> */}

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
                      <span key={inx + 10 + Math.random()}>{play},</span>
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
