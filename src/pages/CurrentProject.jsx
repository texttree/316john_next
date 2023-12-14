import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import ArrowRight from "public/arrow-right.svg";
export default function CurrentProject({ project }) {
  const router = useRouter();

  const handleArrowClick = () => {
    router.push(router.query?.redirectedFrom ?? "/InfoVerse");
    // router.push(router.query?.redirectedFrom ?? "/RsobRlobVerse");
  };

  return (
    <div className="w-400 h-300 custom-gray">
      <div className="flex flex-col mt-10 text-center">
        <p className="text-3xl text-left text-bold text-white ml-7 mt-3">
          {project.nameProject}
        </p>
        <p className="m-4 text-white">{project.verse}</p>
        <div className="mx-5 mt-1">
          <div className="bg-white h-14 text-black rounded-full flex items-start self-start">
            <div className="flex justify-items-start">
              <div className="w-8 h-8 my-3 ml-3 bg-primary rounded-full">
                <div className="mt-1 text-white text-xl">
                  {project.progress}
                </div>
              </div>
              <div className="w-52  ml-3 my-1 text-lg text-left leading-5">
                {project.nameProgress}
              </div>
              <div
                className="w-7 h-2 my-3 ml-14 cursor-pointer"
                onClick={handleArrowClick}
              >
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
