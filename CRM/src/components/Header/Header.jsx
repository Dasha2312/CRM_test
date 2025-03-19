import { useSelector} from "react-redux"

import Menu from '../Menu/Menu';
import Modal from '../../UI/Modal/Modal';
import FormAddUser from "../FormAdduser/FormAdduser";
import ConfirmDeleteUser from "../ConfirmDeleteuser/ConfirmDeleteuser";


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
        </Modal>
      }
    </>
  );
}

export default Header;