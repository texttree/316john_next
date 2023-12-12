import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Pencil from "public/pencil.svg";
import Check from "public/check.svg";
import HeaderProject from "./HeaderProject";

export default function RsobRlobVerse() {
  return (
    <div>
      <HeaderProject />
      <div className="mt-16 flex flex-col items-center h-screen">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 my-3 ml-3 bg-primary rounded-full">
            <div className="ml-2 text-white text-xl">5</div>
          </div>
          <div className="mx-64">Чтение смыслового и дословного переводa</div>
          <div className="w-6 h-6 my-3 ml-3 bg-primary rounded-full">
            <div className="ml-2 text-white text-base">?</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-96 h-80 ml-2 p-4 bg-customGray rounded-xl text-white">
            <div className="flex items-start">
              <div>
                <div className="bg-primary rounded-full flex items-center justify-center w-8 h-8">
                  <div className="text-white text-base">?</div>
                </div>
              </div>
              <div className="ml-2 text-lg">Чтение смыслового переводa</div>
            </div>
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
            <div className="flex items-start">
              <div>
                <div className="bg-primary rounded-full flex items-center justify-center w-8 h-8">
                  <div className="text-white text-base">?</div>
                </div>
              </div>
              <div className="ml-2 text-lg">Чтение дословного переводa</div>
            </div>
            <div>
              <div className="ml-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, quasi ipsam? Animi velit voluptas quae aspernatur
                amet? Dolorum quam eos, non vitae magnam iusto, esse dolor
                molestiae enim voluptates, ab labore ratione cumque quas
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
