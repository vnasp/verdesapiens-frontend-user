'use client'

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element; // Le paso un elemento <Icon/> en vez de string
}
export const ActiveLink = ({ path, icon } : Props) => {

  const pathName = usePathname();

  return (
    <Link href={path} className= {`${style.link} ${ (pathName === path ) ? style['active-link'] : '' } `}>{icon}</Link>

  )
}
