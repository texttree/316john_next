import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Logo from "../logo.svg";
import Bell from "../bell.svg";
import Home from "../home.svg";
import Plus from "../plus.svg";

import DarkModeToggle from "@/components/DarkModeToggle";
import LocaleSwitch from "@/components/LocaleSwitch";

export default function Login() {
  const { t } = useTranslation();
  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter();

  return (
    <div>
      <div>
        <div className="p-10 flex py-6 justify-start items-start relative">
          <div className="text-primary dark:text-white">
            <Logo />
          </div>
          <div className="ml-4">
            <LocaleSwitch />
          </div>
          <div className="ml-4">
            <DarkModeToggle />
          </div>
          <div className="ml-4">
            <Bell className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <Home className="w-6 h-6" />
          </div>
          <div className="ml-4">Мои переводы</div>
        </div>
      </div>
      <div className="m-20 p-24 custom-purple w-96 h-64 flex-shrink-0 rounded">
        <Plus className="w-6 h-6" />
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
