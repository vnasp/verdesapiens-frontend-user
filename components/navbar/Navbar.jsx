import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { faCalculator, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

//Google Fonts
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Ajusta tu arreglo para usar directamente los iconos importados
const navItems = [
  {
    path: "/calculadora",
    icon: faCalculator,
    ariaLabel: "Lee más sobre la calculadora para huertos",
  },
  {
    path: "/calendario",
    icon: faCalendarDays,
    ariaLabel: "Lee más sobre el calendario para huertos",
  },
  {
    path: "/informacion",
    icon: faRecycle,
    ariaLabel: "Lee más sobre datos de sustentabilidad para huertos",
  },
];

export function Navbar() {
  return (
    <>
      <nav className="flex flex-col gap-4 justify-center md:flex-row md:justify-between items-center p-4 text-2xl text-lime-500">
        <div className="flex justify-start items-center">
          <Image
            src="/logo.webp"
            height={56}
            width={56}
            alt="Logo VerdeSapiens"
          />
          <Link href="/">
            <h1 className={`${pacifico.className} text-4xl shadow-lg ms-6`}>
              VerdeSapiens
            </h1>
          </Link>
        </div>
        <div className="flex justify-between md:w-1/3 md:justify-end">
          {navItems.map((navItem) => (
            <ActiveLink
              key={navItem.path}
              path={navItem.path}
              icon={navItem.icon}
              ariaLabel={navItem.ariaLabel}
            />
          ))}
        </div>
      </nav>
    </>
  );
};
