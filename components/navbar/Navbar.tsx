import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCalendar, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

//Google Fonts
const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: "400",
  display:"swap"
});

// Ajusta tu arreglo para usar directamente los iconos importados
const navItems = [
  { path: '/calculadora', icon: faCalculator, arial: 'Lee más sobre la calculadora para huertos' },
  { path: '/calendario', icon: faCalendarDays, arial: 'Lee más sobre el calendario para huertos' },
  { path: '/informacion', icon: faRecycle, arial: 'Lee más sobre datos de sustentabilidad para huertos' },
];


export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-center items-center text-3xl text-lime-500">
          <div><Image src="/logo.webp" width={56} height={56} alt="Logo VerdeSapiens" className="me-4"/></div>
          <div><Link href="/"><h1 className={pacifico.className}>VerdeSapiens</h1></Link></div>
        </div>
        <div className="w-1/3 flex justify-end">
          {
            navItems.map(navItem => (
              <ActiveLink key={navItem.path} path={navItem.path} icon={navItem.icon} aria-label={navItem.arial}/>
            ))
          }
        </div>
      </nav></>

  )
}