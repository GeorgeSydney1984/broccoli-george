"use client"

import { useState } from "react";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { ModalContainer, ModalContainerProps } from "@components/modals";

import { inviteFormValidation } from "@utils";
import { APIResponse, InviteFormData } from "@types";

type InviteModalProps = ModalContainerProps & {
  title?: string;
  onSend: (data: InviteFormData) => Promise<APIResponse>;
}

export function InviteModal({ title = "Request an invite", onSend, ...modalProps }: InviteModalProps) {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] =  useState<InviteFormData>({ fullName: "", email: "", confirmEmail: "" });
  const [inProcessing, setInProcessing] = useState(false);

  const onFormInputChange = (data: Partial<InviteFormData>) =>  {
    if (errorMessage) setErrorMessage("");
    setFormData({ ...formData, ...data });
  }

  const onSendClicked = async () => {
    const validationResult = inviteFormValidation(formData);
    if (!validationResult.validated) {
      setErrorMessage(validationResult.message ?? "");
      return;
    }

    if (errorMessage) setErrorMessage("");
    
    setInProcessing(true);

    const response = await onSend(formData);

    setInProcessing(false);

    if (!response.success && response.message) {
      setErrorMessage(response.message);
      return;
    }
  }

  return (
    <ModalContainer {...modalProps}>
      <div className="flex flex-col gap-8 p-4">
        <h3 className="text-2xl font-semibold text-gray-900 light:text-white text-center">
          {title}
        </h3>
        <div>
          <Input type="text" placeholder="Full Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFormInputChange({ fullName: e.target.value })} required/>
          <Input type="email" placeholder="Email Address" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFormInputChange({ email: e.target.value })} required/>
          <Input type="email" placeholder="Confirm Email Address" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFormInputChange({ confirmEmail: e.target.value })} required/>
          {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
        </div>
        <Button text="Send" type="primary" domType="submit" onClick={onSendClicked} asyncProcessing={inProcessing}/>
      </div>
    </ModalContainer>
  )
}