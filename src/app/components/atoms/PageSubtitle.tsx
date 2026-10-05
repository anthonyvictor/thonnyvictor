export const PageSubtitle = ({ children }: { children: string }) => {
  return (
    <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
      {children}
    </p>
  );
};
