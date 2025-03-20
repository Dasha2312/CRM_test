import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/Slices/ModalSlice';
import { deleteUser } from '../../store/Slices/UsersSlice';


function ConfirmDeleteUser() {
  const dispatch = useDispatch();

  const selectedUser = useSelector(state => state.users.selectedUser)

  const currentUser = selectedUser[0];

  function handleDeleteUser() {
    const userId = currentUser.id
    dispatch(deleteUser(userId))
    dispatch(closeModal())
  }

  return (
    <div>
      <div className='text-2xl mb-5 font-semibold text-center'>Delete user</div>
      {currentUser ? (
          <>
            <div className='text-base mb-6'>Are you sure you want to delete <strong>{currentUser?.name}</strong>?</div>
              <div className='flex gap-x-4 max-w-[300px] mx-auto'>
                <button type='button' className='flex-1 px-4 py-3 rounded bg-blue-800 text-white font-medium text-base cursor-pointer' onClick={handleDeleteUser}>Delete</button>
                <button type='button' className='flex-1 px-4 py-3 rounded bg-red-800 text-white font-medium text-base cursor-pointer' onClick={() => dispatch(closeModal())}>Cancel</button>
              </div>
          </>
        ) : (
          <div className='text-lg font-medium'>Please, select user</div>
        )
      }
      
    </div>
  );
}

export default ConfirmDeleteUser;