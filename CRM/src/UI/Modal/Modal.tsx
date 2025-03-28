import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Slices/ModalSlice";

interface ModalProps {
  isModalOpen: boolean,
  children: React.ReactNode
}

function Modal({isModalOpen, children }: ModalProps) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-50
        ${isModalOpen ? "visible bg-black/20" : "invisible"}
    `}
    >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        bg-white rounded-xl shadow p-6 transition-all sm:min-w-[530px] min-w-[280px]
        ${isModalOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
    >
      <button onClick={() => dispatch(closeModal())} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white
       hover:bg-gray-50 hover:text-gray-600 cursor-pointer">
        X
      </button>

        {children}

    </div>
  </div>
  );
}

export default Modal;