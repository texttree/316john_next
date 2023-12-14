import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Plus from "../plus.svg";

import HeaderProject from "./HeaderProject";
import ModeratorProject from "./ModeratorProject";
import RejectProject from "./RejectProject";
import DoneProject from "./DoneProject";

export default function Projects() {
  const [isPlusVisible, setPlusVisible] = useState(true);

  const togglePlusVisibility = () => {
    setPlusVisible((prevVisibility) => !prevVisibility);
  };

  const projectTemp = {
    date: `12-02-2022`,
    nameProject: "Название/Язык",
    verse:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus\
    voluptatem ab expedita totam repudiandae mollitia perspiciatis quam\
    vitae! Tempora nostrum architecto enim! Libero aliquid quidem alias.\
    Magni ipsa amet sunt?",
    progress: 5,
    nameProgress: "Чтение смыслового и дословного перевода",
  };

  const projectDoneTemp = {
    nameProject: "Название/Язык",
    verse:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus\
    voluptatem ab expedita totam repudiandae mollitia perspiciatis quam\
    vitae! Tempora nostrum architecto enim! Libero aliquid quidem alias.\
    Magni ipsa amet sunt?",
    progress: 10,
    nameProgress: "Опубликовано",
  };

  const projectRejectTemp = {
    nameProject: "Название/Язык",
    verse:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus\
    voluptatem ab expedita totam repudiandae mollitia perspiciatis quam\
    vitae! Tempora nostrum architecto enim! Libero aliquid quidem alias.\
    Magni ipsa amet sunt?",
    progress: 10,
    nameProgress: "Отклонено",
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

      <div className="flex justify-center items-center">
        {!isPlusVisible && (
          <div className="flex">
            <div className="mr-10">
              <ModeratorProject project={projectTemp} />
            </div>
            <div className="mr-10">
              <RejectProject project={projectRejectTemp} />
            </div>
            <div>
              <DoneProject project={projectDoneTemp} />
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
