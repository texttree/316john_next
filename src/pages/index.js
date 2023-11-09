import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Main from "@/Main";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const supabase = useSupabaseClient();
  const [translation, setTranslation] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let { data: translations, error } = await supabase
        .from("translations")
        .select("text");
      setTranslation(translations);
    };

    getData();
  }, [supabase]);

  return (
    <div>
      <Main />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
