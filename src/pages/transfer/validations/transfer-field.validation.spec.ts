import {
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_DATE_MESSAGE,
  INVALID_EMAIL_MESSAGE,
} from "@/common/validations/validations.const";
import {
  validateIBANField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDateField,
  validateEmailField,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateIBANField", () => {
    it("should return false when the value is not informed", () => {
      //arrange
      const value = "";
      //act
      const result = validateIBANField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when the value is not a valid IBAN", () => {
      //arrange
      const value = "1234567890";
      //act
      const result = validateIBANField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(INVALID_IBAN_MESSAGE);
    });
    it("should return true when the value is a valid IBAN", () => {
      //arrange
      const value = "AL35202111090000000001234567";
      //act
      const result = validateIBANField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateAccountIdField", () => {
    it("should return false when account id is empty", () => {
      //arrange
      const value = "";
      //act
      const result = validateAccountIdField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return true when the value is informed", () => {
      //arrange
      const value = "1";
      //act
      const result = validateAccountIdField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateNameField", () => {
    it("should return false when name is empty", () => {
      //arrange
      const value = "";
      //act
      const result = validateNameField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return true when the value is informed", () => {
      //arrange
      const value = "John Doe";
      //act
      const result = validateNameField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateAmountField", () => {
    it("should return false when amount is negative", () => {
      //arrange
      const value = -10;
      //act
      const result = validateAmountField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(INVALID_AMOUNT_MESSAGE);
    });
    it("should return false when amount is zero", () => {
      //arrange
      const value = 0;
      //act
      const result = validateAmountField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(INVALID_AMOUNT_MESSAGE);
    });
    it("should return true when amount is positive", () => {
      //arrange
      const value = 10;
      //act
      const result = validateAmountField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateConceptField", () => {
    it("should return false when concept is empty", () => {
      //arrange
      const value = "";
      //act
      const result = validateConceptField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return true when the value is informed", () => {
      //arrange
      const value = "Transfer";
      //act
      const result = validateConceptField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateRealDateField", () => {
    it("should return true when date is not informed", () => {
      //arrange
      const date = undefined;
      //act
      const result = validateRealDateField(date);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  it("should return false when date is before today", () => {
    //arrange
    const date = new Date(new Date().getTime() - 1);
    //act
    const result = validateRealDateField(date);
    //assert
    expect(result.succeeded).toBeFalsy();
    expect(result.message).toBe(INVALID_DATE_MESSAGE);
  });
  it("should return true when date is after today", () => {
    //arrange
    const date = new Date();
    date.setDate(date.getDate() + 1);
    //act
    const result = validateRealDateField(date);
    //assert
    expect(result.succeeded).toBeTruthy();
  });
  it("should return true when date is equal to today", () => {
    //arrange
    const date = new Date();
    //act
    const result = validateRealDateField(date);
    //assert
    expect(result.succeeded).toBeTruthy();
  });
  describe("validateEmailField", () => {
    it("should return true when email is not informed", () => {
      //arrange
      const value = "";
      //act
      const result = validateEmailField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
    it("should return false when email is not in the correct format", () => {
      //arrange
      const value = "johndoeexample.com";
      //act
      const result = validateEmailField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.message).toBe(INVALID_EMAIL_MESSAGE);
    });
    it("should return true when email is valid", () => {
      //arrange
      const value = "johndoe@example.com";
      //act
      const result = validateEmailField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
