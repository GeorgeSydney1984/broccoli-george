import { InviteFormData, InviteFormValidationResult } from "@types";

export function isEmailFormat(email: string) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function inviteFormValidation(formData: InviteFormData): InviteFormValidationResult {
  const result = { validated: true, message: "" };
  
  if (!formData.fullName || !formData.email || !formData.confirmEmail) {
    result.validated = false;
    result.message = "Please fill all required fields";
  } else if (formData.fullName?.length < 3) {
    result.validated = false;
    result.message = "The full name field must be at least 3 characters";
  } else if (!isEmailFormat(formData.email) || !isEmailFormat(formData.confirmEmail)) {
    result.validated = false;
    result.message = "Please enter an valid email address";
  } else if (formData.email != formData.confirmEmail) {
    result.validated = false;
    result.message = "The confirm email address not match";
  }

  return result;
} 

export const getErrorMessage = (message: any): string => {
  if (!message || typeof message !== "string") return "";
  if (message.includes(":")) return message.split(":")[1].replace(/^\s+/, "");
  return message;
}