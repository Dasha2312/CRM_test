import React, { useState } from 'react';
import InputText from '../../UI/InputText/InputText';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/Slices/UsersSlice';
import { closeModal } from '../../store/Slices/ModalSlice';

function FormAddUser() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const userNameChange = e => setUserName(e.target.value)
  const userEmailChange = e => setUserEmail(e.target.value)
  const userPhoneChange = e => setUserPhone(e.target.value)

  const canSave = [userName, userEmail, userPhone].every(Boolean)

  function handleAddNewUser(e) {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000000),
      name: userName,
      email: userEmail,
      phone: userPhone
    }

    dispatch(addUser(newUser))
    dispatch(closeModal());
  }

  return (
    <form>
      <div className='text-2xl mb-5 font-semibold text-center'>Add new User</div>
      <div className='mb-4'>
        <InputText name="name" placeholder="User Name" onChange={userNameChange} />
      </div>
      <div className='mb-4'>
        <InputText name="email" placeholder="User Email" onChange={userEmailChange} />
      </div>
      <div className='mb-4'>
        <InputText name="phone" placeholder="User Phone" onChange={userPhoneChange} /> 
      </div>
      <button type='submit' className={`btn bg-blue-800 w-full py-2 text-base font-medium text-white 
      rounded cursor-pointer hover:bg-blue-600 duration-500 ${!canSave ? 'bg-gray-500 hover:bg-gray-500 !cursor-default' : ''}`} 
      onClick={handleAddNewUser} disabled={!canSave}>
        Add user
      </button>
    </form>
  );
}

export default FormAddUser;