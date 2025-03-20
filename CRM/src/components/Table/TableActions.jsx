import {useDispatch} from "react-redux"
import { openModal } from "../../store/Slices/ModalSlice";
import IconSearch from "../../UI/Icon/IconSearch";
import { chooseUsersPerPage, searchUserByName } from "../../store/Slices/UsersSlice";
import { useState } from "react";
import InputText from "../../UI/InputText/InputText";


function TableActions() {
  const dispatch = useDispatch();
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [isSearchShow, setIsSearchShow] = useState(false);

  function handleChangeSelect(e) {
    dispatch(chooseUsersPerPage(e.target.value))
    setUsersPerPage(e.target.value)
  }
  
  return (
    <div className='flex justify-between items-center py-[24px] lg:flex-nowrap flex-wrap-reverse'>
      <div className='flex gap-x-[32px]'>
        <button type='button' className='btn bg-[#1D28FF] text-white px-3 py-[8px] rounded cursor-pointer'>Actioned (20)</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer' onClick={() => dispatch(openModal('AddUser'))}>Add</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer' onClick={() => dispatch(openModal('ConfirmDeleteUser'))}>Delete</button>
        <button type='button' className='btn bg-[#B5B8FF] hover:opacity-[0.6] duration-500 px-3 py-[8px] rounded cursor-pointer' 
        onClick={() => dispatch(openModal('UpDateUser'))}>Preview Quotes</button>
      </div>
      <div className="flex items-center gap-x-[30px] lg:mb-0 mb-4">
        <div className="relative">
          <div onClick={() => setIsSearchShow(prev => !prev)} className="cursor-pointer hover:opacity-[0.5] duration-500">
            <IconSearch color="#000"/>
          </div>
          {isSearchShow &&  
            <div className="absolute w-[350px] right-0">
              <InputText name="search" placeholder="Search by name..." onChange={(e) => dispatch(searchUserByName(e.target.value))} />
            </div>
          }
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