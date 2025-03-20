import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/Slices/ModalSlice";
import { upDateUser } from "../../store/Slices/UsersSlice";
import InputText from "../../UI/InputText/InputText";

function UpDateUser() {
  const dispatch = useDispatch();
  const selectUser = useSelector(state => state.users.selectedUser);
  const currentuser = selectUser[0];

    const [userName, setUserName] = useState(currentuser?.name);
    const [userEmail, setUserEmail] = useState(currentuser?.email);
    const [userPhone, setUserPhone] = useState(currentuser?.phone);
  
    const userNameChange = e => setUserName(e.target.value)
    const userEmailChange = e => setUserEmail(e.target.value)
    const userPhoneChange = e => setUserPhone(e.target.value)

  const canSave = [userName, userEmail, userPhone].every(Boolean)

  function handleUpDateUser(e) {
    e.preventDefault();

    const updateUser = {
      id: currentuser.id,
      name: userName,
      email: userEmail,
      phone: userPhone
    }

    dispatch(upDateUser(updateUser))
    dispatch(closeModal());
  }

  return (
    <form>
      <div className='text-2xl mb-5 font-semibold text-center'>Update User</div>
      {currentuser ? (
        <>
          <div className='mb-4'>
            <InputText name="name" placeholder="User Name" onChange={userNameChange} value={userName} />
          </div>
          <div className='mb-4'>
            <InputText name="email" placeholder="User Email" onChange={userEmailChange}  value={userEmail} />
          </div>
          <div className='mb-4'>
            <InputText name="phone" placeholder="User Phone" onChange={userPhoneChange} value={userPhone} /> 
          </div>
          <button type='submit' className={`btn bg-blue-800 w-full py-2 text-base font-medium text-white 
          rounded cursor-pointer hover:bg-blue-600 duration-500 ${!canSave ? 'bg-gray-500 hover:bg-gray-500 !cursor-default' : ''}`} 
          onClick={handleUpDateUser} disabled={!canSave}>
            Update user
          </button>
        </>
        ) : (
          <div className='text-lg font-medium'>Please, select user</div>
        )
      }
    </form>
  );
}

export default UpDateUser;