import axios, { AxiosError } from "axios";

import { baseUrl } from '@api';
import { APIResponse, InvitationPostBody, InvitationErrorResponse } from '@types';
import { getErrorMessage } from "@utils";

export const sendInvitation = async (data: InvitationPostBody): Promise<APIResponse> => {
  try {
    await axios.post(baseUrl, data);
    return { success: true };
  } catch(error) {
    const { response } =  error as AxiosError<InvitationErrorResponse>;
    return { success: false, message: getErrorMessage(response?.data.errorMessage) };
  }
}