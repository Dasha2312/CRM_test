import InputCheckbox from "../../UI/InputCheckbox/InputCheckbox";
import IconNumber from "../../UI/Icon/IconNumber"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortUsersByName } from "../../store/Slices/UsersSlice";

interface TableHeaderProps {
  handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isChecked: boolean
}

function TableHeader({handleClick, isChecked}: TableHeaderProps) {
  console.log(handleClick)
  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState('asc');

  function handleCheckAllInputs(e: React.ChangeEvent<HTMLInputElement>) {
    handleClick(e)
  }

  function handleSortByName() {
    const sortOrderType = sortOrder == 'asc' ? 'desc' : 'asc';
    setSortOrder(sortOrderType);

    dispatch(sortUsersByName({ order: sortOrderType }))
  }

  return (
    <thead className="py-[12px] px-[12px] border-b-1 border-[#0000001a]">
      <tr>
        <th className="pr-1 w-[53px]">
          <div className="pr-2 py-[10px]">
            <InputCheckbox onChange={handleCheckAllInputs} name="select-all" isChecked={isChecked} id="selectAll" />
          </div>
        </th>
        <th className="px-1 w-[85px]">
          <div className="px-2 py-[10px] flex justify-center">
            <IconNumber color="#000" />
          </div>
        </th>
        <th className="px-1 text-left">
          <div className="px-2 py-[10px] font-base font-medium w-[250px] flex items-center cursor-pointer" onClick={handleSortByName}>
            Customer
            <div className="ml-2">
              {sortOrder === 'asc' ? ' ↑' : ' ↓'}
              {/* <IconSort color="#000" size="16" /> */}
            </div>
          </div>
        </th>
        <th className="px-1 text-left"><div className="px-2 py-[10px]  font-base font-medium w-[250px]">Email</div></th>
        <th className="px-1 text-left"><div className="px-2 py-[10px]  font-base font-medium w-[200px]">Address</div></th>
        <th className="px-1 text-left"><div className="px-2 py-[10px]  font-base font-medium">Phone</div></th>
        <th className="px-1 text-left"><div className="px-2 py-[10px]  font-base font-medium">Company</div></th>
        <th className="px-1 text-left"><div className="px-2 py-[10px]  font-base font-medium">Website</div></th>
      </tr>
    </thead>
  );
}

export default TableHeader;