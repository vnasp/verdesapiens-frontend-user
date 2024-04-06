'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ActiveLink.module.css';

export const ActiveLink = ({ path, icon, ariaLabel }) => {

  const pathName = usePathname();

  return (
    <Link href={path} aria-label={ariaLabel} className={`${style.link} ${(pathName === path) ? style['active-link'] : ''} `}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
