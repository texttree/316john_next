import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plus from "../plus.svg";
import HeaderProject from "./HeaderProject";
import CurrentProject from "./CurrentProject";

export default function Projects() {
  const [isPlusVisible, setPlusVisible] = useState(true);

  const togglePlusVisibility = () => {
    setPlusVisible((prevVisibility) => !prevVisibility);
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
        {!isPlusVisible && <CurrentProject />}
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
