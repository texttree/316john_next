import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { useRecoilValue } from "recoil";

import Translators from "./Translators";
import ProgressBar from "./ProgressBar";
import ButtonLoading from "./ButtonLoading";
import CheckBox from "./components/CheckBox";

// import { stepConfigState } from "./state/atoms";
export default function Footer({
  loading = false,
  textCheckbox,
  handleClick,
  textButton,
  href,
  className = { button: "relative btn-quaternary w-28 text-center" },
}) {
  const [isStepPage, setIsStepPage] = useState(false);
  const [checked, setChecked] = useState(false);

  // const stepConfig = useRecoilValue(stepConfigState);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { step } = router?.query;

  useEffect(() => {
    setChecked(false);
  }, [step]);

  useEffect(() => {
    setIsStepPage(router.pathname === "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);
  return (
    <div className="flex flex-col justify-between items-center py-4 md:py-0 mx-auto md:w-full max-w-7xl bg-th-secondary-100 md:flex-row lg:px-4 xl:px-0">
      {isStepPage && (
        <>
          <div className="hidden lg:block pb-3 md:pb-0 translate-y-1/3">
            <ProgressBar
              amountSteps={stepConfig.last_step}
              currentStep={stepConfig.current_step}
            />
          </div>
          <div className="flex gap-2.5 items-center justify-between pb-5 md:pb-0 w-full md:w-auto lg:order-first">
            <div>{t("Participants")}:</div>
            <Translators
              projectCode={stepConfig.project_code}
              size="34px"
              clickable={true}
              className="mx-0.5"
              showModerator
            />
          </div>
        </>
      )}
      <div
        className={`relative flex items-center h-12 md:h-14 w-full md:w-auto ${
          !isStepPage ? "ml-auto" : ""
        }`}
      >
        <div className="flex flex-row justify-between w-full items-center space-x-6">
          <CheckBox
            onChange={() => setChecked((prev) => !prev)}
            checked={checked}
            className={{
              accent:
                "bg-th-secondary-10 checked:bg-th-secondary-400 checked:border-th-secondary-400 checked:before:bg-th-secondary-400 border-th-secondary",
              cursor:
                "fill-th-secondary-10 text-th-secondary-10 stroke-th-secondary-10",
            }}
            label={textCheckbox}
          />
          {href ? (
            <Link href={href} legacyBehavior>
              <button className={className.button} disabled={!checked}>
                {textButton}
              </button>
            </Link>
          ) : (
            <ButtonLoading
              onClick={handleClick}
              className={className.button}
              disabled={!checked}
              isLoading={loading}
            >
              {textButton}
            </ButtonLoading>
          )}
        </div>
      </div>
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
