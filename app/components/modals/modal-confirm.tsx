import { Button } from "@components/button";
import { ModalContainer, ModalContainerProps } from "@components/modals";

type ConfirmModalProps = ModalContainerProps & {
  title?: string;
  confirmBody?: string;
  confirmButtonText?: string;
  onConfirm?: () => void | Promise<void>;
}

export function ConfirmModal({ title = "All Done!", confirmBody, confirmButtonText = "Ok", onConfirm, ...modalProps }: ConfirmModalProps) {
  return (
    <ModalContainer {...modalProps}>
      <div className="flex flex-col gap-8 p-4">
        <h3 className="text-2xl font-semibold text-gray-900 light:text-white text-center">
          {title}
        </h3>
        <span className="text-gray-500 text-center">
          {confirmBody}
        </span>
        <Button text={confirmButtonText} type="primary" onClick={onConfirm ?? modalProps.onClose}/>
      </div>
    </ModalContainer>
  )
}
