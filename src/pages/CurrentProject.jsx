import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ArrowRight from "public/arrow-right.svg";
export default function CurrentProject({ project }) {
  return (
    <div className="w-400 h-300 custom-gray">
      <div className="flex flex-col mt-10 text-center">
        <p className="text-3xl text-center text-bold">{project.nameProject}</p>
        <p className="m-4">{project.verse}</p>
        <div className="mx-5 mt-1">
          <div className="bg-white h-12 text-black rounded-full flex items-start self-start">
            <div className="flex justify-items-start">
              <div className="w-8 h-8 my-2 ml-2 bg-primary rounded-full">
                <div className="mt-1 text-white text-xl">
                  {project.progress}
                </div>
              </div>
              <div className="w-52  ml-3 my-1 text-lg text-left leading-5">
                {project.nameProgress}
              </div>
              <div className="w-7 h-2 my-3 ml-16">
                <ArrowRight />
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
