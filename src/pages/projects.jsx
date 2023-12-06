import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plus from "../plus.svg";
import HeaderProject from "./HeaderProject";

export default function Login() {
  const [isPlusVisible, setPlusVisible] = useState(true);
  const [selectedOptionSrc, setSelectedOptionSrc] = useState("infoSrcLang");
  const [selectedOptionDest, setSelectedOptionDest] = useState("infoDestLang");

  const togglePlusVisibility = () => {
    setPlusVisible((prevVisibility) => !prevVisibility);
  };

  const handleSelectChangeSrc = (event) => {
    selectedOptionSrc(event.target.value);
  };

  const handleSelectChangeDest = (event) => {
    selectedOptionDest(event.target.value);
  };

  return (
    <div>
      <HeaderProject />
      {isPlusVisible && (
        <div className="m-28 p-24 w-96 h-64 custom-purple">
          <Plus
            className="ml-14 w-16 h-16 text-white cursor-pointer"
            onClick={togglePlusVisibility}
          />
        </div>
      )}
      <div className="flex justify-center mt-80">
        {!isPlusVisible && (
          <div className="w-400 h-300 custom-gray">
            <div className="flex flex-col mt-10 ml-10">
              <p className="text-lg text-center text-bold">
                Выберите языки переводa
              </p>
              <select
                className="w-80 h-10 mt-5 bg-white rounded-2xl pl-5"
                defaultValue={selectedOptionSrc}
                onChange={handleSelectChangeSrc}
              >
                <option value="infoSrcLang">С какого языка</option>
                <option value="option2">Вариант 2</option>
                <option value="option3">Вариант 3</option>
              </select>
              <select
                className="w-80 h-10 mt-5 bg-white rounded-2xl pl-5"
                defaultValue={selectedOptionDest}
                onChange={handleSelectChangeDest}
              >
                <option value="infoDestLang">На какой язык</option>
                <option value="optionB">Вариант B</option>
                <option value="optionC">Вариант C</option>
              </select>
              <div className="flex justify-center mt-8">
                <button className="bg-white text-black px-6 py-2.5 rounded-full flex items-center gap-2">
                  Ок
                </button>
                <button className="ml-6 bg-white text-black  px-8 py-2.5 rounded-full flex items-center gap-10">
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
