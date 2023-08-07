import { getErrorMessage, inviteFormValidation, isEmailFormat } from "@utils";

describe("Utils: isEmailFormat ->", () => {
  it("should return false if string not in email format", () => {
    expect(isEmailFormat('test')).toBeFalsy();
    expect(isEmailFormat('123')).toBeFalsy();
    expect(isEmailFormat('123@google')).toBeFalsy();
    expect(isEmailFormat('@google')).toBeFalsy();
    expect(isEmailFormat('george@test.com')).toBeTruthy();
  });
})

describe("Utils: getErrorMessage ->", () => {
  it("should return empty string if pass undefined or not a string", () => {
    expect(getErrorMessage(undefined)).toEqual('');
    expect(getErrorMessage(123)).toEqual('');
  });

  it("should return error message only reason", () => {
    expect(getErrorMessage("Bad Request: Email already in use")).toEqual("Email already in use");
    expect(getErrorMessage("Bad Request:")).toEqual("");
  });
})


describe("Utils: inviteFormValidation ->", () => {
  it("should return unvalid message when any field(s) are empty", () => {
    const result = inviteFormValidation({ fullName: '', email: '', confirmEmail: ''})
    expect(result.validated).toBeFalsy();
    expect(result.message).toEqual('Please fill all required fields');
  });

  it("should return unvalid message when full name less than 3 characters", () => {
    const result = inviteFormValidation({ fullName: 'ab', email: 'george@test.com', confirmEmail: 'george2@test.com'})
    expect(result.validated).toBeFalsy();
    expect(result.message).toEqual('The full name field must be at least 3 characters');
  });

  it("should return unvalid message when email & confirm email not match", () => {
    const result = inviteFormValidation({ fullName: 'george', email: 'george@test.com', confirmEmail: 'george2@test.com'})
    expect(result.validated).toBeFalsy();
    expect(result.message).toEqual('The confirm email address not match');
  });

  it("should return success validation when all fields meet requirement", () => {
    const result = inviteFormValidation({ fullName: 'george', email: 'george@test.com', confirmEmail: 'george@test.com'})
    expect(result.validated).toBeTruthy();
  });
})