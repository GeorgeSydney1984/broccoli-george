import { APIResponse, InviteFormData } from "@types";

export type ModalContainerProps = {
  children?: React.ReactElement | React.ReactElement[];
  onClose?: () =>  void | Promise<void>;
}

type InviteModalProps = ModalContainerProps & {
  title?: string;
  onSend: (data: InviteFormData) => Promise<APIResponse>;
}

type ConfirmModalProps = ModalContainerProps & {
  title?: string;
  confirmBody?: string;
  confirmButtonText?: string;
  onConfirm?: () => void | Promise<void>;
}



export function ModalContainer({ children, onClose }: ModalContainerProps) {
  return (
    <div className="modal-container fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center h-screen max-h-full bg-slate-500/[0.8]">
      <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative bg-white rounded-lg shadow p-4">
          {children}
        </div>
        {onClose && <button onClick={onClose} type="button" className="absolute top-8 right-8 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>}
      </div>
  </div>
  )
}




