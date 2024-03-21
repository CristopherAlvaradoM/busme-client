'use client'

import { useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IconBaseProps } from 'react-icons';
import { usePathname, useRouter } from "next/navigation";

import SubMenuItem from "./BusmeSubNav";

interface ISidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<IconBaseProps>;
  alternateicon: React.ComponentType<IconBaseProps>;
  customClass?: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const BusmeNavButton = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, alternateicon: AlternateIcon, items, customClass, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };
  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [items, path, pathname]);

  return (
          <>
      <div
        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-madium font-poppins cursor-pointer
        transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 md:mt-2
        ${isActive && ' text-white bg-primary-600'} ${customClass ? customClass : ''}
    `}
        onClick={onClick}
      >
        {isActive ? <AlternateIcon className="w-[20px] h-[20px]" /> : <Icon className="w-[20px] h-[20px]" />}
        <p className="text-sm font-semibold">{name}</p>
        {items && items.length > 0 && <IoChevronDown size={18} />}
      </div>
      {expanded && items && items.length > 0 && (
        <div className="flex flex-col space-y-1 ml-10">
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default BusmeNavButton;