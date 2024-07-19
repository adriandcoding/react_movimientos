import {
  validateIBANField,
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
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
});
