import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState } from "react";

import Logo from "../logo.svg";
import Bell from "../bell.svg";
import Home from "../home.svg";
import ChevronDown from "public/chevron-down.svg";
import Funnel from "public/funnel.svg";

import DarkModeToggle from "@/components/DarkModeToggle";
import LocaleSwitch from "@/components/LocaleSwitch";

export default function HeaderProject() {
  const { t } = useTranslation();
  const router = useRouter();

  const [isComboListVisible, setComboListVisibility] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [isFilterVisible, setFilterVisibility] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisibility(!isFilterVisible);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleChevronClick = () => {
    setComboListVisibility(!isComboListVisible);
  };

  const comboList = () => {
    return (
      <div
        className={`absolute left-72 w-52 ${
          isComboListVisible ? "block" : "hidden"
        }`}
      >
        <div
          className={`-ml-1 p-2 w-56 h-9 cursor-pointer ${
            selectedTab === "all" ? "bg-slate-500 text-white" : "text-black"
          }`}
          onClick={() => handleTabClick("all")}
        >
          Общий список
        </div>
        <div
          className={`-ml-1 p-2 w-56 cursor-pointer ${
            selectedTab === "published"
              ? "bg-slate-500 text-white"
              : "text-black"
          }`}
          onClick={() => handleTabClick("published")}
        >
          Опубликовано
        </div>
        <div
          className={`-ml-1 p-2 w-56 h-8 cursor-pointer ${
            selectedTab === "rejected"
              ? "bg-slate-500 text-white"
              : "text-black"
          }`}
          onClick={() => handleTabClick("rejected")}
        >
          Отклонено
        </div>
      </div>
    );
  };

  const myTranslate = () => {
    return (
      <div className="flex border-r border-b  border-gray-300 dark:border-white  ">
        <div className="mt-9 mr-2 ml-6 mb-8">
          <Home className="w-6 h-6" />
        </div>
        <div className="mt-10 mr-6 ml-2 mb-7">Мои переводы</div>
      </div>
    );
  };

  const myList = () => {
    return (
      <div className="flex border-r border-b  border-gray-300 dark:border-white  ">
        <div className="mt-9 mr-2 ml-6 mb-8">
          <Home className="w-6 h-6" />
        </div>
        <div className="mt-10 mr-2 ml-2 mb-7 ">Общий список</div>
        <ChevronDown
          className="w-6 h-6 mt-10 mr-3 cursor-pointer"
          onClick={handleChevronClick}
        />
      </div>
    );
  };

  const myFilter = () => {
    return (
      <div
        className="flex border-r border-b  border-gray-300 dark:border-white cursor-pointer "
        onClick={toggleFilterVisibility}
      >
        <div className="mt-9 mr-2 ml-6 mb-8 ">
          <Funnel className="w-6 h-6" />
        </div>
        <div className="mt-10 mr-4 ml-6 mb-7">
          <div className="">Фильтры</div>
        </div>
      </div>
    );
  };

  const filterDateLang = () => {
    return (
      <div className={`flex col ${isFilterVisible ? "block" : "hidden"}`}>
        <div className="flex border-r border-b  border-gray-300 dark:border-white cursor-pointer ">
          <div className="mt-10 mr-1 ml-6 mb-7">
            <div className="">По дате</div>
          </div>
          <div className="mt-11 mr-2 ml-1 mb-6 ">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="flex border-r border-b  border-gray-300 dark:border-white cursor-pointer ">
          <div className="mt-10 mr-1 ml-6 mb-7">
            <div className="">По языку</div>
          </div>
          <div className="mt-11 mr-2 ml-1 mb-6 ">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  };

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
          {myList()}
          {myFilter()}
          {filterDateLang()}
          <div className="flex-grow">
            <div className="flex border-b border-gray-300 dark:border-white">
              <div className="mt-9 mb-14 "></div>
            </div>
          </div>
        </div>
      </div>
      {comboList()}
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
