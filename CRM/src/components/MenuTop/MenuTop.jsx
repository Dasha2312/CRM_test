import { Link } from "react-router-dom";
import IconSetting from "../../UI/Icon/IconSetting";
import IconPartners from "../../UI/Icon/IconPartners";
import IconChat from "../../UI/Icon/IconChat"
import IconNotification from "../../UI/Icon/IconNotification"

function MenuTop() {
  return (
    <div className="menuTop">
      <div className="container mx-auto px-4">
        <div className="menuTop__inner py-[18px] border-b-1 border-[#0000001a]">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-xl leading-[normal] pl-[64px]">Hi Kate!</div>
            <div className="flex items-center justify-end gap-x-4">
              <Link to="#">
                <IconChat color="#000000" className="cursor-pointer hover:opacity-[0.5] transition-colors duration-200" />
              </Link>
              <Link to="#">
                <IconNotification color="#000000" className="cursor-pointer  hover:opacity-[0.5] transition-colors duration-200" />
              </Link>
              <Link to="#">
                <IconPartners color="#000000" className="cursor-pointer  hover:opacity-[0.5] transition-colors duration-200" />
              </Link>
              <Link to="#">
                <IconSetting color="#000000" className="cursor-pointer  hover:opacity-[0.5] transition-colors duration-200"/>
              </Link>
              <Link to="#">
                <div className="avatar w-[32px] h-[32px] bg-[#AAA9A9] rounded-[50%]"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuTop;