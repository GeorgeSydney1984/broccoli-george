"use client"

import { useState } from 'react';
import { Button } from '@components/button'
import { ConfirmModal, InviteModal } from '@components/modals';
import { sendInvitation } from '@api';
import { InviteFormData } from '@types';

export default function Home() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const onSend = async (data: InviteFormData) => {
    const response = await sendInvitation({ name: data.fullName, email: data.email });
    
    if (response.success) {
      setShowInviteModal(false);
      setShowConfirmModal(true);
    }

    return response;
  }

  return (
    <>
      <div className="m-auto flex flex-col items-center gap-6 p-6 text-center">
        <span className="font-fantasy leading-normal text-4xl text-gray-500 sm:text-5xl">A better way to enjoy every day.</span>
        <span className="font-monospace text-m text-gray-500 sm:text-xl">Be the first to know when we launch.</span>
        <Button text="Request an invite" type="primary" onClick={() => setShowInviteModal(true)} />
      </div>
      {showInviteModal && <InviteModal 
        onClose={() => setShowInviteModal(false)}
        onSend={onSend}
      />}
      {showConfirmModal && <ConfirmModal 
        confirmBody="You will be one of the first to experience Brocconi & Co. when we launch." 
        onConfirm={() => setShowConfirmModal(false)}
      />}
    </>
  )
}
