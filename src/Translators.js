import TranslatorImage from "./TranslatorImage";

// import { useTranslators } from "utils/hooks";

function Translators({
  projectCode,
  size,
  clickable = false,
  className,
  showModerator,
}) {
  // const [translators] = useTranslators({
  //   code: projectCode,
  // });

  return (
    <div className="flex items-center">
      {/* {translators && translators.length > 0 && (
        <>
          {translators.map((item, key) => {
            return (
              <div key={key} className={className}>
                <TranslatorImage
                  clickable={clickable}
                  item={item}
                  size={size}
                  showModerator={showModerator}
                />
              </div>
            );
          })}
        </>
      )} */}
    </div>
  );
}

export default Translators;
