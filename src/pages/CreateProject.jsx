import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CreateProject() {
  const [selectedOptionSrc, setSelectedOptionSrc] = useState("infoSrcLang");
  const [selectedOptionDest, setSelectedOptionDest] = useState("infoDestLang");

  const handleSelectChangeSrc = (event) => {
    setSelectedOptionSrc(event.target.value);
  };

  const handleSelectChangeDest = (event) => {
    setSelectedOptionDest(event.target.value);
  };

  return (
    <div className="w-400 h-300 custom-gray">
      <div className="flex flex-col mt-10 ml-10">
        <p className="text-lg text-center text-bold">Выберите языки переводa</p>
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
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
