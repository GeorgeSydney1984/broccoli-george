export type InvitationPostBody = {
  name: string;
  email: string;
}


export type InvitationErrorResponse = {
  errorMessage: string;
}

export type APIResponse = {
  success: boolean;
  message?: string;
}