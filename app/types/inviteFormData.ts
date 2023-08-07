export type InviteFormData = {
  fullName: string;
  email: string;
  confirmEmail: string;
}

export type InviteFormValidationResult = {
  validated: boolean;
  message?: string;
}