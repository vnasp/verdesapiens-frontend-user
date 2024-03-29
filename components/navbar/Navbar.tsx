import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { CalendarDaysIcon, CalculatorIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { Pacifico } from "next/font/google";
import Image from "next/image";

//Google Fonts
const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: "400",
  display:"swap"
});

const navItems = [
  { path: '/calculadora', icon: <CalculatorIcon /> },
  { path: '/calendario', icon: <CalendarDaysIcon /> },
  { path: '/informacion', icon: <ArrowPathIcon /> },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-center items-center text-3xl text-green-700">
          <div><Image src="/logo.webp" className="h-14 me-4" alt="Logo VerdeSapiens"/></div>
          <div><Link href="/"><h1 className={pacifico.className}>VerdeSapiens</h1></Link></div>
        </div>
        <div className="w-1/3 flex justify-end">
          {
            navItems.map(navItem => (
              <ActiveLink key={navItem.path} path={navItem.path} icon={navItem.icon} />
            ))
          }
        </div>
      </nav></>

  )
}