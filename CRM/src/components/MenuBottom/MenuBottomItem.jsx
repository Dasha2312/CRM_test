import { NavLink } from "react-router-dom";
import DropDown from "../../UI/DropDown/DropDown"

function MenuBottomItem({item}) {
  return (
    <>
      {item.type == "dropdown" ? (
        <DropDown item={item} className="menuBottom__item xl:flex-1 py-1 px-2 rounded hover:bg-[#B5B8FF] duration-500 md:flex-1/5 flex-1/3" />
      ) : (
        <div className="menuBottom__item xl:flex-1 py-1 px-2 rounded hover:bg-[#B5B8FF] duration-500 md:flex-1/5 flex-1/3">
          <NavLink to="#" className={({ isActive }) =>isActive ? "active" : ""}>
            <div className="mb-[13px] flex justify-center">{item.icon}</div>
            <div className="text-center">{item.name}</div>
          </NavLink>
        </div>
      )
      }
    </>
  )
}

export default MenuBottomItem;