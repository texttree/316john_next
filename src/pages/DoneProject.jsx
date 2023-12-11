import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Pencil from "public/pencil.svg";
import Check from "public/check.svg";

export default function DoneProject({ project }) {
  return (
    <div className="w-400 h-300 bg-customGreen rounded-xl">
      <div className="flex flex-col mt-10 text-center">
        <p className="text-3xl text-left text-bold text-white ml-7 mt-3">
          {project.nameProject}
        </p>
        <p className="m-4 text-white">{project.verse}</p>
        <div className="mx-5 mt-1">
          <div className="bg-white h-14 w-52 text-black rounded-full flex items-start self-start">
            <div className="flex justify-items-start">
              <div className="w-8 h-8 my-3 ml-3 bg-green-900 rounded-full">
                <div className="mt-1 text-white flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
              </div>
              <div className="w-52  ml-3 my-5 text-lg text-left leading-5">
                {project.nameProgress}
              </div>
              <div className="">
                <div className="bg-white rounded-full w-14 h-14 ml-12 cursor-pointer text-black flex items-center justify-center">
                  <Pencil className="w-6 h-6" />
                </div>
              </div>
            </div>
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
