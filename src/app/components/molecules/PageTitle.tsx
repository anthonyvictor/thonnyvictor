export const PageTitle = ({
  text1,
  text2,
  reverse = false,
  align = "center",
  size = "lg",
  divide = false,
}: {
  text1: string;
  text2: string;
  reverse?: boolean;
  align?: "center" | "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  divide?: boolean;
}) => {
  return (
    <div className={` space-y-3`}>
      <h1
        className={`font-extrabold tracking-tight text-white text-center ${
          align === "left"
            ? "lg:text-left"
            : align === "right"
              ? "lg:text-right"
              : ""
        } ${
          size === "sm"
            ? "text-3xl"
            : size === "md"
              ? "text-2xl lg:text-4xl"
              : size === "lg"
                ? "text-3xl lg:text-5xl"
                : "text-4xl lg:text-6xl"
        }`}
      >
        {reverse ? (
          <>
            <Coloured text={text1} />{" "}
            {divide ? <hr className="opacity-0" /> : <></>}
            <span>{text2}</span>
          </>
        ) : (
          <>
            <span>{text1}</span> <Coloured text={text2} />
          </>
        )}
      </h1>
    </div>
  );
};

const Coloured = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
      {text}
    </span>
  );
};
