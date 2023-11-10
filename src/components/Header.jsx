import LocaleSwitch from "./LocaleSwitch";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../logo.svg";
import { useTranslation } from "next-i18next";

function Header() {
  const { t } = useTranslation("common");

  return (
    <div className="flex py-6 justify-center items-center relative">
      <div className="text-primary dark:text-white">
        <Logo />
      </div>
      <div className="flex absolute right-0">
        <DarkModeToggle />
        <LocaleSwitch />
      </div>
    </div>
  );
}
export default Header;
