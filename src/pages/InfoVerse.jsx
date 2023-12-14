import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "@/Footer";
import HeaderProject from "./HeaderProject";

// import useSupabaseClient from "utils/supabaseClient";

export default function UserAgreement() {
  // const supabase = useSupabaseClient();

  const router = useRouter();
  const { t } = useTranslation(["common", "users"]);
  const handleClick = async () => {
    // const { error } = await supabase.rpc("check_agreement");
    // if (error) {
    //   console.error(error);
    // } else {
    router.push(`/RsobRlobVerse`);
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
          <div className="mx-64">Чтение информации о стихе</div>
          <div className="w-6 h-6 my-3 ml-3 bg-primary rounded-full">
            <div className="ml-2 text-white text-base">?</div>
          </div>
        </div>
        <div className="w-2/5 h-1/4 bg-customGray mb-2 rounded-xl p-4 text-center text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          quasi ipsam? Animi velit voluptas quae aspernatur amet? Dolorum quam
          eos, non vitae magnam iusto, esse dolor molestiae enim voluptates, ab
          labore ratione cumque quas necessitatibus eius consequatur! Unde
          voluptatibus nam officia illum aperiam, dolores vitae minus quisquam
          minima, incidunt alias.
        </div>
        <div className="w-2/5 h-1/8 p-4 bg-customWhiteGray rounded-xl ">
          <div className="flex items-start">
            <div>
              <div className="bg-primary rounded-full flex items-center justify-center w-8 h-8">
                <div className="text-white text-base">?</div>
              </div>
            </div>
            <div className="ml-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quasi ipsam? Animi velit voluptas quae aspernatur amet?
              Dolorum quam eos, non vitae magnam iusto, esse dolor molestiae
              enim voluptates, ab labore ratione cumque quas necessitatibus eius
              consequatur! Unde voluptatibus nam officia illum aperiam, dolores
              vitae minus quisquam minima, incidunt alias.
            </div>
          </div>
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
