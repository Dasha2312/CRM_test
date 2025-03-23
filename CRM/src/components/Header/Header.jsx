import { useSelector} from "react-redux"

import Menu from '../Menu/Menu';
import Modal from '../../UI/Modal/Modal.tsx';
import FormAddUser from "../FormAdduser/FormAddUser";
import UpDateUser from "../UpDateUser/UpDateUser";
import ConfirmDeleteUser from "../ConfirmDeleteUser/ConfirmDeleteUser";


function Header() {
	const isModalOpen = useSelector(state => state.modal.modalOpen);
	const modalType = useSelector(state => state.modal.modalType)
  return (
    <>
      <Menu/>
      {isModalOpen &&
        <Modal isModalOpen={isModalOpen} modalType={modalType}>
          {modalType == "AddUser" && <FormAddUser />}
          {modalType == "ConfirmDeleteUser" && <ConfirmDeleteUser />}
          {modalType == "UpDateUser" && <UpDateUser />}
        </Modal>
      }
    </>
  );
}

export default Header;