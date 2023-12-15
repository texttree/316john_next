import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "@/Footer";
import HeaderProject from "./HeaderProject";

import EyeSlash from "public/eye-slash.svg";

// import useSupabaseClient from "utils/supabaseClient";

export default function RsobRlobVerse() {
  // const supabase = useSupabaseClient();

  const router = useRouter();
  const { t } = useTranslation(["common", "users"]);
  const handleClick = async () => {
    // const { error } = await supabase.rpc("check_agreement");
    // if (error) {
    //   console.error(error);
    // } else {
    router.push(`/InfoVerse`);
    // }
  };

  return (
    <div>
      <HeaderProject />
      <div className="mt-16 flex flex-col items-center h-screen">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 my-3 ml-3 bg-primary rounded-full">
            <div className="ml-2 text-white text-xl">5</div>
          </div>
          <div className="mx-64">Запись стиха вслепую</div>
          <div className="w-6 h-6 my-3 ml-3 bg-primary rounded-full">
            <div className="ml-2 text-white text-base">?</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-96 h-80 ml-2 p-4 bg-customGray2 rounded-xl text-white">
            <div>
              <div className="ml-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, quasi ipsam? Animi velit voluptas quae aspernatur
                amet? Dolorum quam eos, non vitae magnam iusto, esse dolor
                molestiae enim voluptates, ab labore ratione cumque quas
              </div>
            </div>
          </div>
          <div className="w-96 h-80 ml-2 p-4 bg-customGray rounded-xl text-white">
            <div className="flex justify-center mt-24 cursor-pointer">
              <EyeSlash className="w-16 h-16" />
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <EyeSlash className="w-6 h-6 mr-2" />
          <div className="mr-2">RLOB</div>
          <div className="mr-2">RSOB</div>
          <div className="mr-2">Заметки</div>
          <div className="mr-2">Ключевые слова и вопросы</div>
        </div>
        <Footer
          textButton={t("common:Next")}
          textCheckbox={t("users:Done")}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "users"])),
    },
  };
}
