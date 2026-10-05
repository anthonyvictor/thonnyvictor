import Image from "next/image";
import Link from "next/link";

export const NavBarLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      href="/"
    >
      <div className="relative w-10 h-12 flex items-center justify-center ">
        <Image
          src="/logo.png"
          className=""
          alt="Anthony logo"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col text-left">
        <p className="text-white font-bold text-sm tracking-tight group-hover:text-emerald-400 transition-colors">
          Anthony Victor
        </p>
        <small className="text-zinc-400 text-[10px] font-medium -mt-0.5">
          Fullstack Developer
        </small>
      </div>
    </Link>
  );
};
// export const NavBarLogo = ({ className }: { className?: string }) => {
//   return (
//     <Link
//       className={`relative flex justify-center items-center group ${className}`}
//       href="/"
//     >
//       <div className="flex flex-col items-center">
//         <p className="text-blue-200 font-light text-[14px] group-hover:text-blue-400">
//           Anthony Victor
//         </p>
//         <small className="text-blue-100 text-[10px] font-bold group-hover:text-blue-300">
//           Fullstack Developer
//         </small>
//       </div>
//       {/* <Image
//         src="/assets/img/logo.png"
//         className=""
//         alt="Anthony logo"
//         width={220}
//         height={30}
//       /> */}
//     </Link>
//   );
// };
