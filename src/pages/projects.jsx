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
        <div className="flex justify-start items-start relative">
          <div className="text-primary border-r border-b border-gray-300 dark:text-white">
            <div
              className="mt-6 mr-8 ml-8 mb-6"
              onClick={() => router.push("/")}
            >
              <Logo className="cursor-pointer" />
            </div>
          </div>
          <div className="flex border-r border-b  border-gray-300 dark:border-white  ">
            <div className="mt-9 mb-6">
              <DarkModeToggle />
            </div>
            <div className="mt-9 mr-1 mb-8">
              <LocaleSwitch />
            </div>
            <div className="mt-9 mr-2 ml-2 mb-6 relative">
              <Bell className=" w-6 h-6" />
              {1 && <div className="notification-badge"></div>}
            </div>
          </div>
          <div className="flex border-r border-b  border-gray-300 dark:border-white  ">
            <div className="mt-9 mr-2 ml-6 mb-8">
              <Home className="w-6 h-6" />
            </div>
            <div className="mt-10 mr-6 ml-2 mb-7">Мои переводы</div>
          </div>
          <div className="flex-grow">
            <div className="flex border-b border-gray-300 dark:border-white">
              <div className="mt-9 mb-14 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-28 p-24 custom-purple w-96 h-64 flex-shrink-0 rounded border border-primary dark:border-white border-r-0">
        <Plus className="ml-14 w-16 h-16 text-white" />
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
