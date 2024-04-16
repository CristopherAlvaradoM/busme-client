"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { IconBaseProps } from "react-icons";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

interface BusmeButtonProps {
  name: String;
  icon: React.ComponentType<IconBaseProps>;
  iconAlternative: React.ComponentType<IconBaseProps>;
  path: UrlObject | string;
  customClass?: String;
}

const BusmeNavButton: React.FC<BusmeButtonProps> = ({
  name,
  path,
  icon: Icon,
  iconAlternative: IconAlternative,
  customClass,
}: BusmeButtonProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if(path === "/") return false
    if (path.toString().split('/').length < 3) return pathname === path.toString();
    return pathname.includes(path.toString());
  }, [pathname, path]);

  return (
    <Link href={path}>
      <div
        className={`flex h-[48px] grow items-center gap-2 rounded-md p-3 font-poppins cursor-pointer
        transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 mt-2
        ${isActive ? "text-white bg-primary-600" : ""} ${customClass || ""}
    `}
      >
        {isActive ? (
          <IconAlternative className="w-[20px] h-[20px]" />
        ) : (
          <Icon className="w-[20px] h-[20px]" />
        )}
        <p className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>{name}</p>
      </div>
    </Link>
  );
};

export default BusmeNavButton;
