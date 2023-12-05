import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Login() {
  const { t } = useTranslation("common");
  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setError(false);
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLogin = async () => {
    try {
      // const { error } = await supabase.auth.signIn({
      //   email,
      // });
      // if (error) throw error;
      setError(false);
      router.push(router.query?.redirectedFrom ?? "/projects");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      {user?.email ? (
        <>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mt-10 text-center text-sm text-gray-500 mb-4">
              {user.email}
            </p>
            <Link
              href={"/projects"}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("goToProjects")}
            </Link>

            <br />
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogout}
            >
              {t("logout")}
            </button>
          </div>
        </>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-6 py-96 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center">
              <h2 className="mt-10 text-2xl font-bold leading-9 mb-4 tracking-tight text-gray-900">
                {t("SignAccount")}
              </h2>

              <div
                className={`ml-48  mt-4 cursor-pointer text-sm ${
                  selectedLanguage === "ru" ? "text-gray-500" : ""
                }`}
                onClick={() => handleLanguageChange("ru")}
              >
                Ru
              </div>

              <div
                className={`ml-2 mt-4 cursor-pointer text-sm ${
                  selectedLanguage === "en" ? "text-gray-500" : ""
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                En
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t("Email")}
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                  className="block w-full rounded-none border-b border-gray-300 px-2 py-1.5 text-gray-900 shadow-none focus:ring-0 focus:border-0 focus:border-b-2 focus:border-primary focus:outline-none focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </form>
            <br />
            <p>{error}</p>
            <div className="flex">
              <button
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleLogin}
              >
                {t("SignIn")}
              </button>
              <button
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleLogin}
              >
                {t("Login")}
              </button>
            </div>
          </div>
        </div>
      )}
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
