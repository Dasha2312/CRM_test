import IconLeads from "../../UI/Icon/IconLeads"
import IconDocument from "../../UI/Icon/IconDocument"
import IconTools from "../../UI/Icon/IconTools"
import IconCalendar from "../../UI/Icon/IconCalendar"
import IconChat from "../../UI/Icon/IconChat"
import IconFinance from "../../UI/Icon/IconFinance"
import IconContact from "../../UI/Icon/IconContact"
import IconMoney from "../../UI/Icon/IconMoney"
import IconUser from "../../UI/Icon/IconUser"

import MenuBottomItem from "./MenuBottomItem"



function MenuBottom() {
  const menuBottom = [
    {id: 1, name: 'Leads',
      icon: <IconLeads color="#000000" className="cursor-pointer  hover:opacity-[0.5] transition-colors duration-200" />,
      type: "dropdown",
      items: [
        {id: 1.1, name: 'Leads 1'},
        {id: 1.2, name: 'Leads 2'},
        {id: 1.3, name: 'Leads 3'},
      ]
    },
    {id: 2, name: 'Quotes', 
      icon: <IconDocument color="#000000" />,
      type: "dropdown",
      items: [
        {id: 2.1, name: 'Quotes'},
        {id: 2.2, name: 'Quotes 2'},
      ]
    },
    {id: 3, name: 'Jobs',
      icon: <IconTools color="#000000" />,
      type: "dropdown",
      items: [
        {id: 3.1, name: 'Jobs 1'},
        {id: 3.2, name: 'Jobs 2'},
      ]
    },
    {id: 4, name: 'Planner', 
      icon: <IconCalendar color="#000000" />,
      type: "dropdown",
      items: [
        {id: 4.1, name: 'Planner 1'},
        {id: 4.2, name: 'Planner 2'},
      ]
    },
    {id: 5, name:'Chat', icon: <IconChat color="#000000" />, type: 'link'},
    {id: 6, name: 'finance', 
      type: "dropdown",
      icon: <IconFinance color="#000000" />,
      items: [
        {id: 6.1, name: 'finance 1'},
        {id: 6.2, name: 'finance 2'},
      ]
    },
    {id: 7, name: 'Contacts', 
      type: "dropdown",
      icon: <IconContact color="#000000" />,
      items: [
        {id: 7.1, name: 'Contacts 1'},
        {id: 7.2, name: 'Contacts 2'},
      ]
    },
    {id: 8, name: 'Expenses', icon: <IconMoney color="#000000" />, type: 'link'},
    {id: 9, name: 'User', 
      type: "dropdown",
      icon: <IconUser color="#000000" />,
      items: [
        {id: 9.1, name: 'User 1'},
        {id: 9.2, name: 'User 2'},
      ]
    },
  ]

  return (
    <div className="menuBottom">
      <div className="container mx-auto px-4">
        <div className="menuBottom__items flex py-[12px]">
          {menuBottom.map(item => <MenuBottomItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default MenuBottom;