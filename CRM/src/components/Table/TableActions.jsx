import {useDispatch} from "react-redux"
import { openModal } from "../../store/Slices/ModalSlice";
import IconSearch from "../../UI/Icon/IconSearch";
import { chooseUsersPerPage } from "../../store/Slices/UsersSlice";
import { useState } from "react";


function TableActions() {
  const dispatch = useDispatch();
  const [usersPerPage, setUsersPerPage] = useState(10);

  function handleChangeSelect(e) {
    dispatch(chooseUsersPerPage(e.target.value))
    setUsersPerPage(e.target.value)
  }
  
  return (
    <div className='flex justify-between items-center py-[24px]'>
      <div className='flex gap-x-[32px]'>
        <button type='button' className='btn bg-[#1D28FF] text-white px-3 py-[8px] rounded cursor-pointer'>Actioned (20)</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer' onClick={() => dispatch(openModal('AddUser'))}>Add</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer' onClick={() => dispatch(openModal('ConfirmDeleteUser'))}>Delete</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer'>Preview Quotes</button>
      </div>
      <div className="flex items-center gap-x-[30px]">
        <div>
          <IconSearch color="#000"/>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Show</span>
          <select name="itemShow" className="cursor-pointer" value={usersPerPage} onChange={(e) => handleChangeSelect(e)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <button type="button" className="cursor-pointer">Print</button>
        <button type="button" className="cursor-pointer">Export</button>
      </div>
    </div>
  );
}

export default TableActions;