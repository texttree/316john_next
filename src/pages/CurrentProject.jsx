import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CurrentProject() {
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
      <div className="flex flex-col mt-10 text-center">
        <p className="text-3xl text-center text-bold">Название/Язык</p>
        <p className="m-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          voluptatem ab expedita totam repudiandae mollitia perspiciatis quam
          vitae! Tempora nostrum architecto enim! Libero aliquid quidem alias.
          Magni ipsa amet sunt?
        </p>
        <div className="flex justify-center mt-3">
          <button className="bg-white text-black px-24 py-2 rounded-full flex items-center gap-10">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
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
