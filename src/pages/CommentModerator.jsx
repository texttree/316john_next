import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react"; // Импорт useState
import { useRouter } from "next/router";

import HeaderProject from "./HeaderProject";

import ArrowSmallLeft from "public/arrow-small-left.svg";
import Check from "public/check.svg";
import Xmark from "public/x-mark.svg";

export default function CommentModerator() {
  const [textInput, setTextInput] = useState("");
  const router = useRouter();

  const handleModeratorProject = async () => {
    try {
      router.push(router.query?.redirectedFrom ?? "/PersonalCardModerator");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <HeaderProject />

      <div className="mt-16 flex flex-col items-center h-screen">
        <div className="flex items-start mb-4">
          <div className="flex items-start w-96 mr-96 -ml-48">
            <div
              className="w-8 h-8 cursor-pointer"
              onClick={handleModeratorProject}
            >
              <ArrowSmallLeft className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-2/5 h-1/6 bg-customGray mb-2 rounded-xl p-4  text-white">
          <div className="text-2xl">Название/текст</div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quasi ipsam? Animi velit voluptas quae aspernatur amet? Dolorum quam
            eos, non vitae magnam iusto, esse dolor molestiae enim voluptates,
            ab labore ratione cumque quas necessitatibus eius consequatur! Unde
            voluptatibus nam officia illum aperiam, dolores vitae minus quisquam
            minima, incidunt alias.
          </div>
        </div>
        <div className="w-2/5 h-1/8 mb-2 p-4 bg-customWhiteGray rounded-xl ">
          <div className="flex">
            <div className="text-xl">Ваш комментарий</div>
            <div className="text-sm ml-2">14.12.2024</div>
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quasi ipsam? Animi velit voluptas quae aspernatur amet? Dolorum quam
            eos, non vitae magnam iusto, esse dolor molestiae enim voluptates,
            ab labore ratione cumque quas necessitatibus eius consequatur! Unde
            voluptatibus nam officia illum aperiam, dolores vitae minus quisquam
            minima, incidunt alias.
          </div>
        </div>
        <div className="w-2/5 h-1/8 p-4 bg-customWhiteGray rounded-xl ">
          <div className="flex items-start ">
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="w-full h-full resize-none border-none outline-none  bg-customWhiteGray"
              placeholder="Введите ваш текст..."
            />
          </div>
        </div>
        <div className="flex mt-20">
          <div className="flex cursor-pointer">
            <div className="w-8 h-8 ml-3 bg-green-900 rounded-full">
              <div className="mt-1 text-white flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
            </div>
            <div className=" mr-10 ml-2 mt-1 ">Опубликовать</div>
          </div>
          <div className="flex cursor-pointer">
            <div className="w-8 h-8 ml-3 bg-red-600 rounded-full">
              <div className="mt-1 text-white flex items-center justify-center">
                <Xmark className="w-6 h-6" />
              </div>
            </div>
            <div className="ml-2 mt-1 cursor-pointer">Отклонить</div>
          </div>
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
