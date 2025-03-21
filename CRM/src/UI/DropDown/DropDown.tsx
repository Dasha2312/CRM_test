import { NavLink } from "react-router-dom";
import IconArrowDown from "../Icon/IconArrowDown";
import { ReactElement, ReactHTMLElement, useEffect, useRef, useState } from "react";

interface DropDownProps {
  item: {
    id: number,
    icon: string,
    name: string,
    items: itemProps[],
  },
  className: string
}

interface itemProps {
  id: number,
  name: string
}

function DropDown({item, className}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLinkActive, setisLinkActive] = useState(item.id == 2)
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return(() => {
      document.removeEventListener('click', handleClickOutside)
    })
  })


  return (
    <div className={`relative ${className} ${isLinkActive ? 'bg-[#B5B8FF]' : ''}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(isOpen => !isOpen)} className="dropdown-button cursor-pointer">
        <div className="mb-[13px] flex justify-center">
         {item.icon}
        </div>
        <div className="flex items-center justify-center">
          {item.name}
          <IconArrowDown color="#000000" width="25" height="12" />
        </div>
      </div>

      {isOpen && <div className="rounded bg-white absolute top-[65px] w-[calc(100%+16px)] left-[-8px] shadow-md dropdown-menu px-5 py-3 z-50">
        {item.items.map(link => (
          <NavLink to={`/${link.name.toLowerCase()}`} key={link.id}
          className={({ isActive }) => `${isActive ? 'active' : ''} block py-1 my-1 hover:opacity-[0.5] duration-500`}>
            {link.name}
          </NavLink>
        ))}
          
        </div>
      }
    </div>
  );
}

export default DropDown;