'use client'

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Importar el tipo correcto para la prop icon

interface Props {
  path: string;
  icon: IconProp; // Actualizar el tipo de 'icon' para que coincida con lo esperado por FontAwesomeIcon
}

export const ActiveLink = ({ path, icon }: Props) => {

  const pathName = usePathname();

  return (
    <Link href={path} className={`${style.link} ${(pathName === path) ? style['active-link'] : ''} `}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
