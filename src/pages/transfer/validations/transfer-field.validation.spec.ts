import {
  validateIBANField,
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  INVALID_AMOUNT_MESSAGE,
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
});
