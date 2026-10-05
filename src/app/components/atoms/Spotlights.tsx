export const Spotlights = ({
  reverse = false,
  small = false,
}: {
  reverse?: boolean;
  small?: boolean;
}) => {
  const bsm = small ? "blur-xl" : "blur-3xl";
  const bsm2 = small ? "blur-2xl" : "blur-[100px]";
  const wh = small ? "w-20 h-20" : "w-60 h-60";

  return reverse ? (
    <>
      <div
        className={`absolute -top-2 -left-2 ${wh} bg-emerald-500/15 rounded-full ${bsm} pointer-events-none`}
      />
      <div
        className={`absolute -bottom-2 -right-2 ${wh} bg-purple-500/15 rounded-full ${bsm} pointer-events-none`}
      />
    </>
  ) : (
    <>
      <div
        className={`absolute top-1/4 -left-20 sm:-left-32 ${wh} bg-purple-600/20 rounded-full ${bsm2} pointer-events-none z-0`}
      />
      <div
        className={`absolute bottom-1/4 -right-20 sm:-right-32 ${wh} bg-emerald-500/20 rounded-full ${bsm2} pointer-events-none z-0`}
      />
    </>
  );
};
